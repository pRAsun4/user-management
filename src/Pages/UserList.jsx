import React, { useEffect, useState } from "react";
import Layout from "../Layouts/Layout";
import Delete from "../assets/Delete";
import Pen from "../assets/Pen";
import Modal from "../Components/modal/Modal";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [active, setActive] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [userId, setUserId] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://673736a9aafa2ef222330e54.mockapi.io/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const truncate = (text, length) => {
    return text.length > length ? text.slice(0, length) + "..." : text;
  };

  const AvatarFunc = (name) => {
    if (!name) return "";

    const initials = name
      .split(" ")
      .map((part) => part[0])
      .join("+");

    return `https://eu.ui-avatars.com/api/?name=${initials}&size=250`;
  };

  const handleEditUser = (userId) => {
    setActive(!active)
    setUserId(userId)
    
  }
  const handleDeleteUser = (userId) => {
    setDeleteModal(!deleteModal);
    setUserId(userId);
  }
  const handleAddPeople = () => {
    setAddModal(!addModal);
    
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <Layout>
      <div className=" w-full p-3 md:p-6 flex flex-col gap-6 ">
        <div className="w-full flex items-center justify-between">
          <div className="max-w-[14rem] md:max-w-md w-full">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="sm:flex hidden absolute inset-y-0 start-0  items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full p-3 md:p-4 md:ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-[6px] md:end-2.5 bottom-[6px] md:bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleAddPeople()}
            className=" px-4 py-2 rounded-md text-white bg-blue-700 hover:bg-blue-800 text-[12px] border"
          >
            add people
          </button>
        </div>

        <div className="customer-list w-full  overflow-x-auto ">
          <table className="w-full rounded-md overflow-hidden border">
            <thead className="">
              <tr>
                <th width="50" className="px-4 py-2 text-left">
                  <input
                    type="checkbox"
                    onChange={null}
                    checked={null}
                    className="form-checkbox text-blue-500 cursor-pointer"
                  />
                </th>
                <th className="px-4 py-4 text-left">User</th>
                <th className="px-4 py-4 text-left">Status</th>
                <th className="px-4 py-4 text-left">Phone no.</th>
                <th className="px-4 py-4 text-left">Currency</th>
                <th className="px-4 py-4 text-left">Company name</th>
                <th className="px-4 py-4 text-left"></th>
              </tr>
            </thead>
              <tbody>
                {filteredUsers &&
                  filteredUsers.map((user, index) => (
                    <tr key={index} className="">
                      <td width="50" className="px-4 py-3">
                        <input
                          type="checkbox"
                          checked={null}
                          onChange={null}
                          className="form-checkbox text-blue-500 cursor-pointer"
                        />
                      </td>
                      <td
                        width="200"
                        className="p-4 py-3 inline-flex items-center space-x-3"
                      >
                        <img
                          src={AvatarFunc(user.name)}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                        <span>{truncate(user.name, 16)} </span>
                      </td>
                      <td width="300" className="px-4 py-3 ">
                        {user.isActive ? "active" : "offline"}
                      </td>
                      <td width="300" className="px-4 py-3 ">
                        {user.mobileNumber}
                      </td>
                      <td width="300" className="px-4 py-3 ">
                        {truncate(user.currency, 15)}
                      </td>
                      <td width="300" className="px-4 py-3 ">
                        {user.companyName}
                      </td>
                      <td width="300" className="px-4 py-3 text-right">
                        <button onClick={() => handleEditUser(user.id)} className="p-3 edt-btn  text-white text-sm rounded  focus:outline-none border">
                          <Pen />
                        </button>
                        <button onClick={() => handleDeleteUser((user.id))} className="p-3 ml-3 dlt-btn  text-white text-sm rounded  focus:outline-none border">
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
          </table>
          {active ? <Modal isOpen={active} onClose={() => setActive(false)} user="users" userId={userId} updateMethod="PUT" /> : null }
          {deleteModal ? <Modal isOpen={deleteModal} onClose={() => setDeleteModal(false)} user="users" userId={userId} updateMethod="DELETE" /> : null }
          {addModal ? <Modal isOpen={addModal} onClose={() => setAddModal(false)} user="users"   updateMethod="POST" /> : null }
        </div>
      </div>
    </Layout>
  );
}
