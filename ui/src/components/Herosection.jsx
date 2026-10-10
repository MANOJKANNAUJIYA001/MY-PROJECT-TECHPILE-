import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src="/images/h-1-shape-01.png" alt="" className="hero-side-shape" aria-hidden="true" />

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="hero-content">
              <img src="/images/shape-13.png" alt="" className="hero-dots-left" aria-hidden="true" />

              <h1 className="hero-title">
                Where Talent <span>Meets Opportunity</span>
                <br />
               <div className='d-flex gap-3'>
                 With   
                <Typewriter
                  options={{
                    strings: ['Zentora'],
                    autoStart: true,
                    loop: true,
                  }}
                />
               </div>
              </h1>

              <p className="hero-desc">
                Connect. Collaborate. Earn. Post projects, discover global talent,
                compare competitive bids, and hire top freelancers with secure
                escrow payments on Zentora.
              </p>

              <Link to="/user-project" className="btn hero-cta">
                Browse Jobs &amp; Projects <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="hero-visual">
              {/* decorative shapes around girl */}
              <img src="/images/shape-16.png" alt="" className="hero-shape-16" aria-hidden="true" />
              <img src="/images/shape-15.png" alt="" className="hero-shape-15" aria-hidden="true" />
              <img src="/images/shape-02.png" alt="" className="hero-shape-02" aria-hidden="true" />
              <img src="/images/shape-13.png" alt="" className="hero-dots-right" aria-hidden="true" />
              <img src="/images/shape-04.png" alt="" className="hero-shape-yellow" aria-hidden="true" />

              <img
                src="/images/girl-1.webp"
                alt="Zentora talent"
                className="hero-girl"
              />

              <div className="hero-talent-card">
                <h6>Active Talent</h6>
                <div className="hero-talent-row">
                  <img src="/images/author-1-1-1.png" alt="Active talent" className="hero-talent-thumbs" />
                  <p className="hero-talent-text">
                    <strong>10k+</strong>
                    <span>Vetted Experts</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection