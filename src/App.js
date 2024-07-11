import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Notes from "./pages/Notes";
import Archived from "./pages/Archived";
import Important from "./pages/Important";
import Bin from "./pages/Bin";
import { AppContext } from "./context/AppContext";
import Overlay from "./components/Overlay";

function App() {
  const { showOverlay, setShowOverlay } = useContext(AppContext);

  function clickHandler() {
    setShowOverlay(true);
  }

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div className="bg-slate-900 w-screen h-screen text-white">
      <Navbar />
      <div className="flex">
        <div className="flex">
          <Sidebar />
        </div>

        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </div>

      <div
        onClick={clickHandler}
        className=" bg-slate-500 cursor-pointer rounded-full flex justify-center items-center text-[40px] fixed bottom-8 right-8 w-[60px] h-[60px] hover:bg-slate-600 pb-2 transition duration-400"
      >
        +
      </div>
      {showOverlay && <Overlay onClose={toggleOverlay} />}
    </div>
  );
}

export default App;
