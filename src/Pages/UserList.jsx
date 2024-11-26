import React from 'react'
import Layout from '../Layouts/Layout'

export default function UserList() {
  return (
    <Layout>
        <div className=" w-full p-6 ">
              <div className="customer-list w-full  overflow-x-auto border">
                <table className="w-full rounded-lg">
                  
                  <tbody>
                    {/* {customers.map((customer, index) => ( */}
                      <tr className="" >
                        {/* <td width='50' className="px-4 py-3">
                          <input type="checkbox" checked={allChecked} onChange={handleSingleChecked} className="form-checkbox text-blue-500 cursor-pointer" />
                        </td> */}
                        <td width='80' className="p-4 py-3 flex items-center space-x-3">
                          <img src="https://via.placeholder.com/40" alt="Profile" className="w-10 h-10 rounded-full" />
                        </td>
                        <td width='300' className="px-4 py-3 ">name</td>
                        <td width='300' className="px-4 py-3 ">email</td>
                        <td width='300' className="px-4 py-3 ">2024-11-25</td>
                        <td width='300' className="px-4 py-3 text-right">
                          <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 focus:outline-none">
                            Review
                          </button>
                        </td>
                      </tr>
                    {/* ))} */}
                  </tbody>
                </table>
              </div>
              </div>
    </Layout>
  )
}
