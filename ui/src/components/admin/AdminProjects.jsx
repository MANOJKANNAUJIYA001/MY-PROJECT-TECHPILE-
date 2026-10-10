import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

const AdminProjects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      const res = await axios.get("http://localhost:9000/admin-project-list");
      setData(res?.data?.result);
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora Admin</span>
          <h2 className="dash-heading">Manage All Projects</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="table-responsive">
              <table className="table dash-table mb-0">
                <thead>
                  <tr>
                    <th>Project Title</th>
                    <th>Description</th>
                    <th>Budget</th>
                    <th>Timeline</th>
                    <th>Client Id</th>
                    <th>Status</th>
                   
                  </tr>
                </thead>

                <tbody>
                  {data.length > 0 ? (
                    data.map((item) => (
                      <tr key={item._id}>
                        <td>{item.title}</td>
                        <td>{item.desc}</td>
                        <td>₹{item.budget}</td>
                        <td>{item.duration}</td>
                        <td>{item.clientId}</td>
                        <td>
                          <span
                            className={
                              item.status ? "status-ok" : "status-pending"
                            }
                          >
                            {item.status ? "Active" : "Pending"}
                          </span>
                        </td>
                         
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-3">
                        No Projects Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProjects;