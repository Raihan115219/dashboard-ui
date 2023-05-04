import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";

const MainRoutes = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/code" element={<h1>Hello code</h1>} />
    <Route path="/settings" element={<h1>Hello settings</h1>} />
    <Route path="/contact" element={<h1>Hello Contact page</h1>} />
    <Route path="/try1" element={<h1>Hello , this is just for try</h1>} />
    <Route path="/try2" element={<h1>Hello this is just for try</h1>} />
    <Route path="/try3" element={<h1>Hello this is just for try</h1>} />
  </Routes>
);

export default MainRoutes;
