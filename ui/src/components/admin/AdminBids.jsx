import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminBids = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get('http://localhost:9000/admin-biding-list')
    setData(res?.data?.result || [])
  }

  const statusClass = (status) => {
    if (status === 'accepted' || status === 'accept') return 'status-ok'
    if (status === 'rejected' || status === 'reject') return 'status-bad'
    return 'status-pending'
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora Admin</span>
          <h2 className="dash-heading">Escrow &amp; Bid Monitoring</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>Escrow &amp; Bid Monitoring</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table dash-table mb-0">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Project Title</th>
                        <th>Bid Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.map((item) => (
                        <tr key={item._id}>
                          <td>{item?.user_name}</td>
                          <td>{item?.user_email}</td>
                          <td>{item?.title}</td>
                          <td>₹{item?.amount}</td>
                          <td>
                            <span className={statusClass(item?.status)}>
                              {item?.status}
                            </span>
                          </td>
                        </tr>
                      ))}
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

export default AdminBids