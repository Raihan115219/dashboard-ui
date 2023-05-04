import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <h1>contact</h1>,
      },
      {
        path: "/settings",
        element: <h1>contact</h1>,
      },
      {
        path: "/try1",
        element: <h1>Demooo</h1>,
      },
      {
        path: "/try2",
        element: <h1>Demo</h1>,
      },
      {
        path: "/try3",
        element: <h1>Demo</h1>,
      },
      {
        path: "/code",
        element: <h1>Demo</h1>,
      },
    ],
  },
]);
