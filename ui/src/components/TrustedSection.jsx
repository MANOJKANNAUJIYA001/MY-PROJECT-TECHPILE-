import React from 'react'
import { FaCheck, FaPlay, FaAward } from 'react-icons/fa'

const TrustedSection = () => {
  return (
    <section className="about-section section-pad">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="about-visual position-relative">
              <img src="/images/shape-13.png" alt="" className="about-dots-tl" />
              <img src="/images/shape-02.png" alt="" className="about-blob" />
              <img src="/images/shape-13.png" alt="" className="about-dots-br" />

              <img
                src="/images/about-01.webp"
                alt="Work without borders"
                className="about-main-img img-fluid"
              />

              <div className="about-video-card">
                <div className="video-thumb position-relative">
                  <img src="/images/Image-2.png" alt="Workspace" />
                  <span className="play-btn"><FaPlay /></span>
                </div>
                <div className="video-lines">
                  <span />
                  <span />
                </div>
              </div>

              <div className="about-stats-card">
                <span className="stats-badge"><FaAward /></span>
                <div>
                  <strong>150+</strong>
                  <small>Top Countries</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 about-content position-relative">
            <img src="/images/shape-04.png" alt="" className="about-circle-right" />
            <p className="eyebrow">THE FUTURE OF FREELANCING</p>
            <h2 className="section-title text-start">
              Work Without Borders With{' '}
              <span className="accent-pink underline-word">Zentora</span>
            </h2>
            <p className="about-text">
              Zentora is a secure, escrow-backed platform where businesses and
              freelancers connect across the globe. Hire. Work. Grow. — get premium
              development, design, content, and marketing delivered on time, within budget.
            </p>
            <ul className="about-features list-unstyled">
              <li><FaCheck /> Expert Freelancers</li>
              <li><FaCheck /> Safe Escrow Payments</li>
              <li><FaCheck /> 24/7 Priority Support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedSection