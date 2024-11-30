import React, { useEffect, useId, useState } from "react";
import Layout from "../Layouts/Layout";
import PhotoSvg from "../assets/photo.svg";
import penSvg from "../assets/pen.svg";
import plusIcon from "../assets/icon-plus.png";
import { AdData } from "../CustomApiData/ApiData";
import CompanyModal from "../Components/modal/CompanyModal";
import { useSelector } from "react-redux";
import { AvatarFunc, truncate } from "../hook/Hook";
import Modal from "../Components/modal/Modal";

export default function CompanyProfile() {
  const userId = useSelector((state) => state.app.userId);
  const companyId = parseInt(userId);
  const [user, setUser] = useState([]);
  const [name, setName] = useState(false);
  const [singleUserId, setSingleUserId] = useState();

  // console.log(user, "user");

  const handleCompanyModal = (user_id) => {
    setName(!name);
    setSingleUserId(user_id);
  };

  useEffect(() => {
    if (isNaN(companyId)) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://673736a9aafa2ef222330e54.mockapi.io/company/${companyId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
        // setModal(false);
      } catch (err) {
        // Handle errors gracefully
        console.error(err.message);
        alert(err.message); // Only call alert if there's an actual error
      }
    };

    fetchData();
  }, [companyId]);

  return (
    <Layout>
      <div className="w-full flex flex-col max-w-[34.375rem] relative ">
        <div className="name-place flex sm:flex-row flex-col  items-center gap-5">
          <div className="w-[6rem] sm:w-[8.75rem] h-[6rem] sm:h-[8.75rem] overflow-hidden flex items-center justify-center rounded-full bg-[#EDF6FE]">
            <img
              src={(user && AvatarFunc(user.companyName)) || PhotoSvg}
              alt={user ? "user name initial" : "cammera icon"}
            />
          </div>
          <h6 className=" inline-flex items-center gap-4 sm:text-[2rem] text-[1.5rem] md:text-[2.625rem] font-bold ">
            {(user && truncate(user.companyName, 16)) || "Workplace name"}
            <button onClick={() => handleCompanyModal(user.id)} className="cursor-pointer">
              <img src={penSvg} alt="pen icon" />
            </button>
          </h6>
        </div>
        {name ? (
          <Modal
            isOpen={name}
            onClose={() => setName(false)}
            user="company"
            userId={singleUserId}
            updateMethod="PUT"
            nameUpdate={true}
          />
        ) : null}

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
            <label htmlFor="email" className="w-full">
              Email:
              <input
                type="email"
                id="email"
                value={user.email}
                onChange={null}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="demo@company.com"
                required
              />
            </label>
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <label htmlFor="mobileNumber" className="w-full">
              Mobile number:
              <input
                type="text"
                id="mobileNumber"
                value={user.mobileNumber}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="123-456-789"
                required
              />
            </label>
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <label htmlFor="address" className="w-full">
              Address:
              <input
                type="text"
                id="address"
                value={user.address}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="address"
                required
              />
            </label>
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
          <div className="w-full flex items-center gap-3 mt-6 ">
            <label htmlFor="gstNumber" className="w-full">
              Gst No:
              <input
                type="number"
                id="gstNumber"
                value={user.gst_num}
                className="bg-gray-50 border  text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="gst_num: 9487"
                required
              />
            </label>
            <button type="button" className="btn">
              <img src={penSvg} alt="pen icon" />
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
