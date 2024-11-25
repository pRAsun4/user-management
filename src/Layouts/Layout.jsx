import PropTypes from "prop-types";
import Header from "../Components/Header";
import { useSelector } from "react-redux";

export default function Layout({ children }) {
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  

  return (
    <>
      <Header className={` w-full flex flex-col items-center justify-between ${sidebarOpen ? 'active-sidebar' : ''} `}  />
      <main
        id="main"
        className={`min-h-screen border ${sidebarOpen ? 'active-sidebar': ''}`}
      >
        {children}
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
