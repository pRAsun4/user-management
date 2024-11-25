import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/appSlice/AppSlice";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

export default function Header({ className }) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header
      className={`${className} h-full bg-[#F1F1F1] px-3 py-8 border `}
      
    >
      <div className="w-full flex flex-col">
        <HeaderLogo />
        <Navbar className="mt-8" />
      </div>
      <button className=" custom-btn rounded-md border" onClick={handleToggle}>
        {sidebarOpen ? "close" : "opne"}
      </button>
    </header>
  );
}
