import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserBids = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const info = JSON.parse(localStorage.getItem('info'));
    const userId = info?._id;
    const res = await axios.get(`http://localhost:9000/user-get-bids?userId=${userId}`);
    setData(res?.data?.result)
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Freelancers</span>
          <h2 className="dash-heading">My Placed Bids &amp; Offers</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>My Placed Bids &amp; Offers</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table dash-table mb-0">
                    <thead>
                      <tr>
                        <th>Project Title</th>
                        <th>Client Budget</th>
                        <th>Bid Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item) => {
                        return (<tr>
                          <td>{item?.title}</td>
                          <td>₹{item?.budget}</td>
                          <td>₹{item?.amount}</td>
                          <td><span
                            // className="status-pending"
                            className={item?.status == 'accept' ? 'status-ok' : 'status-pending'}
                          >{item?.status}</span></td>
                        </tr>)
                      })}


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBids