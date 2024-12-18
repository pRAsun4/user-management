import React from 'react'
import { ApiData } from '../CustomApiData/ApiData'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function Navbar({className, isSmallScreen}) {
    const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  return (
    <ul className={`${className} w-full flex flex-col gap-4`}>
        {ApiData.map((data, index) => (
            <li key={index} className={`w-full  `}>
                <Link to={data.link} className={`w-full flex ${isSmallScreen && sidebarOpen ? ' justify-center' : sidebarOpen ? 'items-center' : 'justify-center'} gap-4`} title={data.title}>
                    <data.icon />
                    {isSmallScreen && sidebarOpen ? null : sidebarOpen ? <span className='h5'>{data.menu}</span> : null}
                </Link>
            </li>
        ))}
    </ul>
  )
}
