import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CompanyModal from "./modal/CompanyModal";

export default function HeaderLogo({ className, isSmallScreen }) {
  const sidebarOpen = useSelector((state) => state.app.sidebarVisible);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);
  const userId = useSelector((state) => state.app.userId);
  const companyId = parseInt(userId);
  console.log(user, "user");

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (isNaN(companyId)) {
      console.error("Invalid userId");
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
        setModal(false);
      } catch (err) {
        // Handle errors gracefully
        console.error(err.message);
        alert(err.message); // Only call alert if there's an actual error
      }
    };

    fetchData();
  }, [companyId]);

  return (
    <div
      className={`w-auto flex flex-col justify-center items-center ${className}`}
    >
      <button
        onClick={handleModal}
        className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full "
      >
        <img
          src="https://eu.ui-avatars.com/api/?name=Company+Name&size=250"
          alt="company logo"
        />
      </button>
      {isSmallScreen && sidebarOpen ? null : sidebarOpen ? (
        <h2 className="h4">Company name</h2>
      ) : null}
      {modal ? (
        <CompanyModal isOpen={modal} onClose={() => setModal(false)} />
      ) : null}
    </div>
  );
}
