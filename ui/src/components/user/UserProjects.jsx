import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import Swal from "sweetalert2";

const UserProjects = () => {
  const [data, setData] = useState([]);
  const [projectId, setProjectId] = useState('');
  const [amount, setAmount] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:9000/user-project-list");
    setData(res?.data?.result);
  };
  const handlePostBid = async () => {
    const info = JSON.parse(localStorage.getItem('info'));
    const userId = info?._id;
    if (!amount) {
      Swal.fire({
        title: "Validation failed",
        text: "Please Enter Amount",
        icon: "error"
      })
      return 0
    }
    const data = { userId, projectId, amount }
    const res = await axios.post('http://localhost:9000/user-create-bids', data);
    if (res?.data?.success == true) {
      Swal.fire({
        title: "Biding",
        text: res?.data?.message,
        icon: "success"
      })
      setProjectId(null);
      setAmount(null)
    } else {
      Swal.fire({
        title: "Biding",
        text: res?.data?.message,
        icon: "error"
      })
    }
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Freelancers</span>
          <h2 className="dash-heading">Active Projects Board</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row align-items-center g-3 mb-4">
              <div className="col-12 col-sm-6">
                <h4 className="mb-0">Active Projects Board</h4>
              </div>

            </div>

            {
              data.map((item) => (
                <div className="row mb-3" key={item._id}>
                  <div className="col-12">
                    <div className="job-card mb-0">
                      <div className="row align-items-start mb-3">
                        <div className="col-12 col-sm-8">
                          <h5 className="job-card-title">{item.title}</h5>
                        </div>
                        <div className="col-12 col-sm-4 text-sm-end">
                          <span className="job-budget">₹{item.budget}</span>
                        </div>
                      </div>

                      <div className="row g-2 mb-3">
                        <div className="col-auto text-secondary small fw-semibold">
                          <FaClock className="text-orange me-1" /> {item.duration}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-12">
                          <p className="job-card-desc mb-0">{item.desc}</p>
                        </div>
                      </div>

                      <div className="row align-items-center">
                        <div className="col-6">
                          <span
                            className={
                              item.status ? "status-ok" : "status-pending"
                            }
                          >
                            {item.status ? "Active" : "Open"}
                          </span>
                        </div>
                        <div className="col-6 text-end">
                          {
                            projectId == item?._id ?
                              <>
                                <div className="d-flex justify-content-end gap-2 ">
                                  <input placeholder="Enter your amount" onChange={(e) => setAmount(e.target.value)} className="form-control" style={{ width: "240px", border: "2px solid #ee4a03" }} type="text" />
                                  <button onClick={handlePostBid} className="btn btn-sm btn-orange">Submit</button>
                                </div>
                              </>
                              :
                              <button onClick={() => setProjectId(item?._id)} type="button" className="btn btn-sm btn-orange">
                                Place Bid (1 Credit)
                              </button>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProjects;