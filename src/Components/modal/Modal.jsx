import React, { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, user, userId, updateMethod }) {
  const [singleUser, setSingleUser] = useState();
  const [formData, setFormData] = useState({});
    console.log(userId, "userid");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://673736a9aafa2ef222330e54.mockapi.io/${user}/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSingleUser(data);
        setFormData(data);
      } catch (err) {
        alert(err.message);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = userId
        ? `https://673736a9aafa2ef222330e54.mockapi.io/${user}/${userId}`
        : `https://673736a9aafa2ef222330e54.mockapi.io/${user}`;

      const options = {
        method: updateMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`${updateMethod} request failed.`);
      }

      const result = await response.json();
      console.log(`${updateMethod} successful:`, result);
      alert(`${updateMethod === 'PUT' ? 'Update' : updateMethod === 'DELETE' ? 'User deletion' : updateMethod === 'POST' ? 'user creation' : ''}  successful!`);
      onClose(); 
    } catch (err) {
      alert(err.message);
    }
  };

  if (!isOpen || !singleUser) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h4 className="text-left">Modal Title</h4>
        <form onSubmit={handleFormSubmit}>
          {singleUser && updateMethod === 'DELETE' ? <h5 className="text-left">Are you really want to delete ?</h5> : (
            <>
              <label className="text-left">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </label>
              <label className="text-left">
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                />
              </label>
              <label className="text-left">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </label>
              <label className="text-left">
                Mobile no:
                <input
                  type="text"
                  name="mobile no"
                  value={formData.mobileNumber || ""}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                />
              </label>
              {/* <label className="text-left">
                Message:
                <textarea placeholder="Enter your message"></textarea>
              </label> */}
            </>
          ) }
          <div className="modal-buttons">
            <button type="button" className="dlt-btn !border" onClick={onClose}>
              Close
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
