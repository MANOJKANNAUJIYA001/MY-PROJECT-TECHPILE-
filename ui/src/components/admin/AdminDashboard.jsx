import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUsers, FaUserTie, FaBriefcase } from 'react-icons/fa'
import AdminProjects from './AdminProjects';
const AdminDashboard = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await axios.get('http://localhost:9000/admin-stats')
    setData(res?.data?.result)
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora Admin</span>
          <h2 className="dash-heading">Admin Management Dashboard</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row g-3 mb-4">
              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-teal">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaUsers /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">{data?.users || 0}</h4>
                      <p className="kpi-label">Total Freelancers</p>
                      <p className="kpi-caption">Registered on platform</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-pink">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaUserTie /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">{data?.clients || 0}</h4>
                      <p className="kpi-label">Active Clients</p>
                      <p className="kpi-caption">Hiring on Zentora</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-green">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaBriefcase /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">{data?.projects || 0}</h4>
                      <p className="kpi-label">Live Projects</p>
                      <p className="kpi-caption">deals finalized</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <AdminProjects />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard