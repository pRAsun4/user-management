import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserId } from "../../store/appSlice/AppSlice";

export default function CompanyModal({ isOpen, onClose }) {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://673736a9aafa2ef222330e54.mockapi.io/company"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, []);

  const handleId = (userId) => {
    dispatch(setUserId(userId));
  }


  if (!isOpen) return null;
  return (
    <div className="modal-overlay p-3" onClick={onClose}>
      <div className="modal-container !max-h-[25rem] overflow-auto " onClick={(e) => e.stopPropagation()}>
        <h4 className="text-left">Company List</h4>
        <div className="w-full flex flex-col gap-3 ">
          {users &&
            users.map((user, index) => (
              <button key={index} onClick={() =>handleId(user.id.toString()) } className="w-full flex items-center p-3">{user.companyName}</button>
            ))}
        </div>
        <div className="modal-buttons">
          <button type="button" className="dlt-btn !border" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
