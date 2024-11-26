import { useDispatch, useSelector } from "react-redux";
import { toggleAsidebar, toggleSidebar } from "../store/appSlice/AppSlice";
import HeaderLogo from "./HeaderLogo";
import Navbar from "./Navbar";

export default function Header({ className, isSmallScreen }) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };
  const  handleAside = () => {
    dispatch(toggleAsidebar());
  };

  return (
    <header
      className={`${className} headbar h-full bg-[#F1F1F1] px-3 py-8  `}
    >
      <div className="w-auto flex flex-col">
        <HeaderLogo isSmallScreen={isSmallScreen} className="" />
        <Navbar className="mt-8 md-hide" />
      </div>

      <button className=" custom-btn rounded-md border" onClick={isSmallScreen ? handleAside : handleToggle}>
        {sidebarOpen ? "close" : "opne"}
      </button>
    </header>
  );
}
