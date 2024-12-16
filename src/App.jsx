import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { VideoPlayer } from "./pages/VideoPlayer/VideoPlayer";
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
