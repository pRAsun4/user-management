import React from 'react'
import { useSelector } from 'react-redux';

export default function HeaderLogo({className}) {
    const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  return (
    <div className={`w-full flex flex-col justify-center items-center ${className}`}>
        <div className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full border">
            <img src="" alt="company logo" />
        </div>
        {sidebarOpen ? <h2 className="h4">Company name</h2> : null}
    </div>
  )
}
