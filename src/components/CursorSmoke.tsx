import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angularVelocity: number;
  radius: number;
  life: number;
  decay: number;
}

interface AmbientPuff {
  baseX: number;
  baseY: number;
  radius: number;
  ax: number;
  ay: number;
  fx: number;
  fy: number;
  phaseX: number;
  phaseY: number;
}

function hexToRgb(hex: string) {
  const h = hex.trim().replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const int = parseInt(full, 16);
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}

// A paint-in-a-bucket style trail: moving the cursor sheds particles that
// carry the motion's velocity, then curl (their velocity vector rotates
// over time) while friction slows them down — the same shape you get
// stirring a stick through liquid. Particles are flat-filled and the whole
// canvas is blurred + contrast-boosted (the "gooey" technique) so
// overlapping particles fuse into one continuous coiling ribbon instead of
// reading as separate dots. A few faint ambient puffs keep the page from
// feeling static when the cursor is idle.
export function CursorSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const ambientPuffs: AmbientPuff[] = Array.from({ length: 3 }, () => ({
      baseX: 0.1 + Math.random() * 0.8,
      baseY: 0.1 + Math.random() * 0.8,
      radius: 60 + Math.random() * 60,
      ax: 60 + Math.random() * 90,
      ay: 50 + Math.random() * 80,
      fx: 0.035 + Math.random() * 0.04,
      fy: 0.03 + Math.random() * 0.045,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
    }));

    const mouse = { x: width / 2, y: height / 3, active: false };
    let lastX = mouse.x;
    let lastY = mouse.y;
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener('mousemove', onMove);

    let particles: Particle[] = [];
    const MAX_PARTICLES = 180;

    const colorRef = { rgb: hexToRgb('#d4d4d4') };
    const readColor = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--color-smoke');
      if (v) colorRef.rgb = hexToRgb(v);
    };
    readColor();
    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let raf = 0;
    let prevNow = performance.now();
    const start = prevNow;

    const render = (now: number) => {
      const dt = Math.min((now - prevNow) / 16.67, 3);
      const t = (now - start) / 1000;
      prevNow = now;

      ctx.clearRect(0, 0, width, height);
      const { r, g, b } = colorRef.rgb;

      // Spawn trail particles proportional to cursor speed since last frame.
      if (mouse.active) {
        const dx = mouse.x - lastX;
        const dy = mouse.y - lastY;
        const dist = Math.hypot(dx, dy);
        const steps = Math.min(Math.floor(dist / 6), 8);
        for (let i = 0; i < steps; i++) {
          if (particles.length >= MAX_PARTICLES) break;
          const f = steps === 0 ? 1 : i / steps;
          const px = lastX + dx * f;
          const py = lastY + dy * f;
          const speed = Math.min(dist, 40);
          const swirl = (Math.random() < 0.5 ? -1 : 1) * (0.04 + Math.random() * 0.06);
          particles.push({
            x: px,
            y: py,
            vx: dx * 0.12 + (Math.random() - 0.5) * speed * 0.15,
            vy: dy * 0.12 + (Math.random() - 0.5) * speed * 0.15,
            angularVelocity: swirl,
            radius: 22 + Math.random() * 26,
            life: 1,
            decay: 0.012 + Math.random() * 0.012,
          });
        }
        lastX = mouse.x;
        lastY = mouse.y;
      }

      // Update + draw trail particles: curl (rotate velocity), friction, fade.
      const next: Particle[] = [];
      for (const p of particles) {
        const cos = Math.cos(p.angularVelocity * dt);
        const sin = Math.sin(p.angularVelocity * dt);
        const nvx = p.vx * cos - p.vy * sin;
        const nvy = p.vx * sin + p.vy * cos;
        p.vx = nvx * 0.94;
        p.vy = nvy * 0.94;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.life -= p.decay * dt;

        if (p.life > 0) {
          ctx.globalAlpha = Math.min(p.life * 1.4, 1);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * (0.6 + p.life * 0.4), 0, Math.PI * 2);
          ctx.fill();
          next.push(p);
        }
      }
      particles = next;
      ctx.globalAlpha = 1;

      // Faint ambient drift so the page never feels fully static.
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      for (const a of ambientPuffs) {
        const driftX = Math.sin(t * a.fx * Math.PI * 2 + a.phaseX) * a.ax;
        const driftY = Math.cos(t * a.fy * Math.PI * 2 + a.phaseY) * a.ay;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(a.baseX * width + driftX, a.baseY * height + driftY, a.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reducedMotion) raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.16]"
      style={{ filter: 'blur(34px) contrast(11)' }}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
