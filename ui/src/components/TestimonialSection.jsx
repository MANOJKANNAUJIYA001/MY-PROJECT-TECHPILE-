import React from 'react'
import {
  FaStar,
  FaRegStar,
  FaRegClock,
  FaRegFileAlt,
  FaRegUser,
  FaBookOpen,
  FaUsers,
} from 'react-icons/fa'

const TrendingSection = () => {
  return (
    <section className="trending-section section-pad">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow">TRENDING CONTRACTS</p>
          <h2 className="section-title">
            Explore Active <span className="underline-word">Gigs &amp; Submit</span> Proposals
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <article className="gig-card">
              <div className="gig-img-wrap">
                <img src="/images/course-04-590x430.jpg" alt="E-commerce Website Dev" />
                <span className="gig-badge">Fixed Price</span>
              </div>
              <div className="gig-body">
                <span className="gig-tag">Web Dev</span>
                <h5 className="gig-title">E-commerce Website Dev (React & Node)</h5>
                <p className="gig-rating">
                  <span className="star-row">
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                  </span>
                  <span>(5.0/ 3 Ratings)</span>
                </p>
                <p className="gig-price">₹85,000</p>
                <div className="gig-footer">
                  <span><FaRegFileAlt /> 8 Bids</span>
                  <span><FaRegUser /> 45 Views</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-md-6">
            <article className="gig-card">
              <div className="gig-img-wrap">
                <img src="/images/course-08-590x430.jpg" alt="Financial Security" />
                <span className="gig-badge">
                  <FaRegClock className="me-1" />
                  12 Weeks
                </span>
              </div>
              <div className="gig-body">
                <span className="gig-tag">Expert</span>
                <h5 className="gig-title">Grow Personal Financial Security Thinking &...</h5>
                <p className="gig-rating">
                  <span className="star-row">
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                  </span>
                  <span>(5.0/ 2 Ratings)</span>
                </p>
                <p className="gig-price">₹45,000</p>
                <div className="gig-footer">
                  <span><FaBookOpen /> 8 Lessons</span>
                  <span><FaUsers /> 72 Students</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-md-6">
            <article className="gig-card">
              <div className="gig-img-wrap">
                <img src="/images/course-03-590x430.jpg" alt="RESTful API" />
                <span className="gig-badge">
                  <FaRegClock className="me-1" />
                  20 Hours
                </span>
              </div>
              <div className="gig-body">
                <span className="gig-tag">All Levels</span>
                <h5 className="gig-title">The Complete Guide to Build RESTful API...</h5>
                <p className="gig-rating">
                  <span className="star-row">
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaRegStar className="star-off" />
                  </span>
                  <span>(4.0/ 2 Ratings)</span>
                </p>
                <p className="gig-price">Free</p>
                <div className="gig-footer">
                  <span><FaBookOpen /> 9 Lessons</span>
                  <span><FaUsers /> 42 Students</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-md-6">
            <article className="gig-card">
              <div className="gig-img-wrap">
                <img src="/images/course-12-590x430.jpg" alt="Competitive Strategy" />
                <span className="gig-badge">
                  <FaRegClock className="me-1" />
                  25 Hours
                </span>
              </div>
              <div className="gig-body">
                <span className="gig-tag">All Levels</span>
                <h5 className="gig-title">Competitive Strategy Law for Management...</h5>
                <p className="gig-rating">
                  <span className="star-row">
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaStar className="star-on" />
                    <FaRegStar className="star-off" />
                    <FaRegStar className="star-off" />
                  </span>
                  <span>(3.0/ 2 Ratings)</span>
                </p>
                <p className="gig-price">₹32,000</p>
                <div className="gig-footer">
                  <span><FaBookOpen /> 7 Lessons</span>
                  <span><FaUsers /> 362 Students</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingSection