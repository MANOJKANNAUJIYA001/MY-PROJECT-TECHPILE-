import React from 'react'
import { FaRocket, FaUsers, FaBriefcase, FaSmile, FaUserTie, FaLaptopCode } from 'react-icons/fa'

const Aboutus = () => {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-page-header text-center">
          <p className="eyebrow">ABOUT ZENTORA</p>
          <h1 className="section-title">Where Talent Meets Opportunity</h1>
          <p className="section-sub">
            Learn who we are, what we stand for, and how we help clients and freelancers grow.
          </p>
        </div>

        {/* Mission Card */}
        <div className="about-mission-card">
          <h2>
            <FaRocket className="about-heading-icon" />
            Our Mission
          </h2>
          <p>
            Zentora is a freelancing marketplace where clients post projects and freelancers bid
            using a credit system. We believe great work happens when talent meets opportunity —
            without borders, without friction.
          </p>
          <p>
            Clients get quality proposals. Freelancers get fair chances. Everyone grows. That is
            the future of freelancing we are building.
          </p>
        </div>

        {/* Stats Row */}
        <div className="row g-3 about-stats-row">
          <div className="col-md-4">
            <div className="about-stat-card">
              <FaUsers className="about-stat-icon" />
              <h3>500+</h3>
              <p>Active Freelancers</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-stat-card">
              <FaBriefcase className="about-stat-icon" />
              <h3>200+</h3>
              <p>Projects Posted</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-stat-card">
              <FaSmile className="about-stat-icon" />
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Audience Cards */}
        <div className="row g-3 about-audience-row">
          <div className="col-md-6">
            <div className="about-audience-card">
              <h3>
                <FaUserTie className="about-heading-icon" />
                For Clients
              </h3>
              <p>
                Post a project, receive competitive bids, pick the best freelancer, and get work
                done with secure escrow-backed deals — all from one simple dashboard.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-audience-card">
              <h3>
                <FaLaptopCode className="about-heading-icon" />
                For Freelancers
              </h3>
              <p>
                Browse open projects, spend credits to place bids, build your profile, and win
                work that matches your skills — from free Starter to Elite plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutus