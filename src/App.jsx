import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CourseCardSection from './components/Cursos';
import { VideoPlayer } from "./pages/VideoPlayer";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

const App = () => {
  const location = useLocation();

  const fullScreenRoutes = ["/signup", "/signin"];
  const isFullScreenPage = fullScreenRoutes.includes(location.pathname);

  return (
    <>
      {!isFullScreenPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cursos" element={<CourseCardSection />} />
        <Route path="/video/:videoId" element={<VideoPlayer />} />
      </Routes>
    </>
  );
};

const Root = () => (
  <StyleSheetManager shouldForwardProp={isPropValid}>
    <Router>
      <App />
    </Router>
  </StyleSheetManager>
);

export default Root;
