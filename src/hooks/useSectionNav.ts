import { useNavigate } from 'react-router-dom';

// Section anchors are scrolled to via JS rather than native `href="#id"`
// navigation, since the app uses HashRouter (the URL hash is reserved for
// routing to pages like /project/:slug). Works from any route: navigates
// home first if needed, then scrolls once the section exists in the DOM.
export function useSectionNav() {
  const navigate = useNavigate();

  return (id: string) => {
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    if (window.location.hash === '#/' || window.location.hash === '') {
      scroll();
    } else {
      navigate('/');
      requestAnimationFrame(() => requestAnimationFrame(scroll));
    }
  };
}
