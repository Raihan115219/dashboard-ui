import "./App.css";
import Navbar from "./components/Navbar";
import { SideBar } from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
