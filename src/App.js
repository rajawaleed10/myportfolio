import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Protfolio from "./pages/Protfolio";
import Reviews from "./pages/Reviews";
import ContactMe from "./pages/ContactMe";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about-me":
        title = "";
        metaDescription = "";
        break;
      case "/protfolio":
        title = "";
        metaDescription = "";
        break;
      case "/reviews":
        title = "";
        metaDescription = "";
        break;
      case "/contact-me":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/protfolio" element={<Protfolio />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact-me" element={<ContactMe />} />
    </Routes>
  );
}
export default App;
