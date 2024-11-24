import PropTypes from "prop-types";
import Header from "../Components/Header";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  

  const headerStyle = {
    maxWidth: sidebarOpen ? "240px" : "100px",
    transition: "max-width 0.3s ease", 
  };

  const mainStyle = {
    width: sidebarOpen ? "calc(100% - 240px)" : "calc(100% - 100px)",
    marginLeft: "auto",
    transition: "width 0.3s ease", 
  };

  return (
    <>
      <Header className={` w-full `} style={headerStyle} />
      <main
        id="main"
        className="min-h-screen border"
        style={mainStyle}
      >
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
