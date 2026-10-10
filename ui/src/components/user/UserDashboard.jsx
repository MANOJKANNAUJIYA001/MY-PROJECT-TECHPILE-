import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWallet, FaGavel, FaCoins } from 'react-icons/fa'

const UserDashboard = () => {
  const [stats, setStats] = useState({ credits: 0, totalBids: 0, Earning: 0 })
  const info = JSON.parse(localStorage.getItem('info') || '{}')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const userId = info?._id
    const res = await axios.get(`http://localhost:9000/user-stats?userId=${userId}`)
    setStats(res?.data?.result)
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Freelancers</span>
          <h2 className="dash-heading">Talent Dashboard</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row g-3 mb-4">
              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-green">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaWallet /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">₹{stats?.Earning || 0}</h4>
                      <p className="kpi-label">Total Earnings</p>
                      <p className="kpi-caption">Accepted bids</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-sky">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaGavel /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">{stats?.totalBids || 0}</h4>
                      <p className="kpi-label">Bids Placed</p>
                      <p className="kpi-caption">All your bids</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-4">
                <div className="kpi-card kpi-purple">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <span className="kpi-icon"><FaCoins /></span>
                    </div>
                    <div className="col-9">
                      <h4 className="kpi-value">{stats?.credits || 0}</h4>
                      <p className="kpi-label">Credits Left</p>
                      <p className="kpi-caption">1 credit = 1 bid</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <div className="dash-plan-banner mb-0">
                  <strong>Credits:</strong> {stats?.credits || 0} left · <strong>1 credit = 1 bid</strong>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h4>Welcome Back, {info?.name || 'Freelancer'}!</h4>
                <p className="text-secondary mb-3">
                  Your Zentora dashboard is ready. Use credits to place bids — <strong>1 credit = 1 bid</strong>. Upgrade your plan when you need more credits.
                </p>
                <Link to="/user-project" className="btn btn-orange me-2">Browse Projects</Link>
                <Link to="/user-plans" className="btn btn-outline-orange">View Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard