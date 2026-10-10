import React from 'react'
import {
  FaFolderOpen,
  FaCoins,
  FaHandshake,
  FaShieldAlt,
  FaUserCog,
  FaTachometerAlt,
} from 'react-icons/fa'

const Services = () => {
  return (
    <section className="services-page">
      <div className="container">
        <div className="services-page-header text-center">
          <p className="eyebrow">OUR SERVICES</p>
          <h1 className="section-title">Everything You Need to Hire &amp; Work</h1>
          <p className="section-sub">
            Simple tools for clients and freelancers — from posting projects to secure payments.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaFolderOpen className="service-icon" />
              <h4>Project Posting</h4>
              <p>
                Clients post projects with title, description, budget ($), and timeline.
                No category hassle — just clear requirements.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaCoins className="service-icon" />
              <h4>Credit-Based Bidding</h4>
              <p>
                Freelancers use credits to place bids. 1 credit = 1 bid. Plans from free
                Starter (10 credits) to Elite (200 credits).
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaHandshake className="service-icon" />
              <h4>Deal Finalization</h4>
              <p>
                Clients review all bids, select a freelancer, and finalize the deal.
                Other bids are automatically rejected.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaShieldAlt className="service-icon" />
              <h4>Escrow &amp; Payments</h4>
              <p>
                Secure escrow monitoring for accepted bids. Track platform volume and
                accepted bid values in real time.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaUserCog className="service-icon" />
              <h4>Profile Management</h4>
              <p>
                Update photo, contact info, bio, skills, and hourly rate. Separate flows
                for Admin, Client, and Freelancer.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service-card">
              <FaTachometerAlt className="service-icon" />
              <h4>Admin Dashboard</h4>
              <p>
                Manage users, clients, projects, credit plans, and bids. Full platform
                oversight from one central panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services