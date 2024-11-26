import PropTypes from "prop-types";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import Aside from "../Components/Aside";
import { useEffect, useState } from "react";
import { toggleSidebar } from "../store/appSlice/AppSlice";

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  const asideOpen = useSelector((state) => state.app.asideVisible);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 980;
      setIsSmallScreen(isSmall)
      if (isSmall) {
        dispatch(toggleSidebar(false)); 
      } else {
        dispatch(toggleSidebar(true)); 
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [dispatch]);

  return (
    <>
      <Header
        isSmallScreen={isSmallScreen}
        className={` w-full flex flex-col items-center justify-between ${
          sidebarOpen && isSmallScreen
            ? ""
            : sidebarOpen
            ? "active-sidebar"
            : ""
        } `}
      />
      {isSmallScreen && (
        <Aside isSmallScreen={isSmallScreen} className={` ${asideOpen ? "active-aside" : ""} `} />
      )}
      <main
        id="main"
        className={`min-h-screen  ${
          sidebarOpen && isSmallScreen
            ? ""
            : sidebarOpen
            ? "active-sidebar"
            : ""
        }`}
      >
        <section className="w-full h-full p-6 flex flex-col  border">
          {children}
        </section>
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
