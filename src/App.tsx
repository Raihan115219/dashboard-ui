import "./App.css";
import MainRoutes from "./Routes";
import Navbar from "./components/Navbar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="App mt-[4rem]">
        <div className="AppGlass">
          <SideBar />
          <div className="ml-[-75px] ">
            <MainRoutes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
