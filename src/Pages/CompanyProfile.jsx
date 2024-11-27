import React, { useEffect, useId, useState } from "react";
import Layout from "../Layouts/Layout";
import PhotoSvg from "../assets/photo.svg";
import penSvg from "../assets/pen.svg";
import plusIcon from "../assets/icon-plus.png";
import { AdData } from "../CustomApiData/ApiData";
import CompanyModal from "../Components/modal/CompanyModal";

export default function CompanyProfile() {
  
  return (
    <Layout>
      <div className="w-full flex flex-col max-w-[34.375rem] relative ">
        <div className="name-place flex sm:flex-row flex-col  items-center gap-5">
          <div className="w-[6rem] sm:w-[8.75rem] h-[6rem] sm:h-[8.75rem] overflow-hidden flex items-center justify-center rounded-full bg-[#EDF6FE]">
            <img src={PhotoSvg} alt="cammera icon" />
          </div>
          <h6 className=" inline-flex items-center gap-4 sm:text-[2rem] text-[1.5rem] md:text-[2.625rem] font-bold ">
            Workplace name
            <button  className="cursor-pointer">
              <img src={penSvg} alt="pen icon" />
            </button>
          </h6>
          
        </div>

        <div className="w-full flex flex-col mt-8 gap-7">
          <h5 className=" text-[2rem] font-normal ">Workspace admins</h5>
          <div className="w-full max-w-[34.375rem] grid sm:grid-cols-3 grid-cols-2 gap-4">
            {AdData.map((user, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] p-6 gap-3 rounded-md relative "
              >
                <img
                  src={user.photo}
                  alt="user image"
                  className=" w-20 h-20 rounded-full  "
                />
                <h6 className=" text-[1rem] ">{user.name}</h6>
                <p className="text-[12px]">{user.title}</p>
                <span className="absolute top-2 right-3">
                  <img
                    src={user.delete}
                    alt="delete icon"
                    className="cursor-pointer"
                  />
                </span>
              </div>
            ))}
            <div className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] p-6 cursor-pointer rounded-md  ">
              <img src={plusIcon} alt="user image" className="   " />
              <p className="text-[12px] text-[#0832DE] ">add admin</p>
            </div>
          </div>
        </div>

        <div className="w-full fle flex-col mt-8 gap-5">
          <h5 className=" text-[2rem] font-normal ">WorkSpace Details</h5>

          <div className="w-full flex items-center gap-3 mt-6 ">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="demo@company.com"
              required
            />
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <input
              type="number"
              id="mobileNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="123-456-789"
              required
            />
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <input
              type="text"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="address"
              required
            />
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <input
              type="number"
              id="gstNumber"
              className="bg-gray-50 border  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="gst_num: 9487"
              required
            />
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
