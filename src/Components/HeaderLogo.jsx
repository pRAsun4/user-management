import React from "react";
import { useSelector } from "react-redux";

export default function HeaderLogo({ className, isSmallScreen }) {
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  
  return (
    <div
      className={`w-auto flex flex-col justify-center items-center ${className}`}
    >
      <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full ">
        <img src="https://eu.ui-avatars.com/api/?name=Company+Name&size=250" alt="company logo" />
      </div>
      {isSmallScreen && sidebarOpen ? null : sidebarOpen ? <h2 className="h4">Company name</h2> : null}
    </div>
  );
}
