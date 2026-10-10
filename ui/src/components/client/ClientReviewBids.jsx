import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ClientReviewBids = () => {
  const location = useLocation();
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData() //call 
  }, [location])

  const fetchData = async () => {
    const projectId = location?.state?._id
    const res = await axios.get(`http://localhost:9000/client-biding-list?projectId=${projectId}`)
    setData(res?.data?.result)
  }

  const handleStatus = async (status, userId) => {
    const projectId = location?.state?._id;
    const data = { projectId, status, userId }
    const res = await axios.put('http://localhost:9000/client-biding-action', data);
    if (res?.data?.success == true) {
      Swal.fire({
        title: "Actions",
        text: res?.data?.message,
        icon: "success"
      })
      fetchData()
    } else {
      Swal.fire({
        title: "Actions",
        text: res?.data?.message,
        icon: "error"
      })
    }
  }
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <h2 className="dash-heading">Review Candidate Proposals</h2>
        </div>
      </div>

      {/* Project Details */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="dash-card">
            <div className="row">

              <div className="col-md-4 mb-3">
                <strong>Project Title</strong>
                <p className="mb-0">{location?.state?.title}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Category</strong>
                <p className="mb-0">Web Development</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Budget</strong>
                <p className="mb-0">₹ {location?.state?.budget}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Duration</strong>
                <p className="mb-0">{location?.state?.duration}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Posted On</strong>
                <p className="mb-0">{location?.state?.createdAt}</p>
              </div>

              <div className="col-md-4 mb-3">
                <strong>Description</strong>
                <p className="mb-0">{location?.state?.desc}</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Candidate Table */}
      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="table-responsive">
              <table className="table dash-table mb-0">
                <thead>
                  <tr>
                    <th>Freelancer</th>
                    <th>Email</th>
                    <th>Bid Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    data?.map((item) => {
                      return (<tr>
                        <td>{item?.user_name}</td>
                        <td>{item?.user_email}</td>
                        <td>₹{item?.amount}</td>
                        <td>
                          <span className={item?.status == 'accept' ? 'status-ok' : 'status-bad'}>{item?.status}</span>
                        </td>
                        <td>
                          <span className="status-ok me-2" style={{ cursor: 'pointer' }} onClick={() => handleStatus('accept', item?.userId)}>Accept</span>
                          <span className="status-bad" style={{ cursor: 'pointer' }} onClick={() => handleStatus('reject', item?.userId)}>Reject</span>
                        </td>
                      </tr>)
                    })
                  }

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewBids;