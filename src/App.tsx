import "./App.css";
import Navbar from "./components/Navbar";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

interface IProps {
  children: React.ReactNode;
}

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="App">
          <div className="AppGlass">
            <SideBar />
            <div className="ml-[-75px]">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
