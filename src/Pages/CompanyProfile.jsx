import React from "react";
import Layout from "../Layouts/Layout";
import PhotoSvg from '../assets/photo.svg'
import penSvg from '../assets/pen.svg'
import plusIcon from '../assets/icon-plus.png'
import { AdData } from "../CustomApiData/ApiData";

export default function CompanyProfile() {
  return (
    <Layout>
      <div className="w-full flex flex-col relative ">
        <div className="name-place flex sm:flex-row flex-col  items-center gap-5">
          <div className="w-[6rem] sm:w-[8.75rem] h-[6rem] sm:h-[8.75rem] overflow-hidden flex items-center justify-center rounded-full bg-[#EDF6FE]">
            <img src={PhotoSvg} alt="cammera icon" />
          </div>
          <h6 className=" inline-flex items-center gap-4 sm:text-[2rem] text-[1.5rem] md:text-[2.625rem] font-bold ">
            Workplace name
            <span className="cursor-pointer">
              <img src={penSvg} alt="pen icon" />
            </span>
          </h6>
        </div>

        <div className="w-full flex flex-col mt-8 gap-7">
          <h5 className=" text-[2rem] font-normal ">Workspace admins</h5>
          <div className="w-full max-w-[34.375rem] grid sm:grid-cols-3 grid-cols-2 gap-4">
            {AdData.map((user, index) => (
              <div key={index} className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] p-6 gap-3 rounded-md relative ">
                <img src={user.photo} alt="user image" className=" w-20 h-20 rounded-full  " />
                <h6 className=" text-[1rem] ">{user.name}</h6>
                <p className="text-[12px]">{user.title}</p>
                <span className="absolute top-2 right-3" ><img src={user.delete} alt="delete icon" className="cursor-pointer" /></span>
              </div>
            ))}
            <div  className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] p-6 cursor-pointer rounded-md  ">
              <img src={plusIcon} alt="user image" className="   " />
              <p className="text-[12px] text-[#0832DE] ">add admin</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
