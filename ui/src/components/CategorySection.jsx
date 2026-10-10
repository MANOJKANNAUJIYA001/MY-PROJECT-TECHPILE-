import React from 'react'
import {
  HiOutlineDesktopComputer,
  HiOutlineColorSwatch,
  HiOutlineCode,
  HiOutlineBriefcase,
  HiOutlineDatabase,
  HiOutlineSpeakerphone,
  HiOutlineHand,
  HiOutlineDeviceMobile,
  HiOutlinePhotograph,
} from 'react-icons/hi'

const CategorySection = () => {
  return (
    <section className="category-section section-pad">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            Browse Talent by <span className="underline-word">Category</span> on Zentora
          </h2>
          <p className="section-sub">
            Where talent meets opportunity — find certified experts and agency-level
            professionals for any contract, stack, or timeline.
          </p>
        </div>

        <div className="row g-3 g-lg-4">
          <div data-aos="flip-left" className="col-lg-4 col-md-6">
            <div className="category-card cat-teal">
              <div className="cat-icon">
                <HiOutlineDesktopComputer />
              </div>
              <h5>Web & Software Dev</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="flip-right" className="category-card cat-pink">
              <div className="cat-icon">
                <HiOutlineColorSwatch />
              </div>
              <h5>Design & Creative</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="zoom-in" className="category-card cat-green">
              <div className="cat-icon">
                <HiOutlineCode />
              </div>
              <h5>Writing & Translation</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="zoom-out-down" className="category-card cat-yellow">
              <div className="cat-icon">
                <HiOutlineBriefcase />
              </div>
              <h5>Admin Support</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="zoom-out-up" className="category-card cat-purple">
              <div className="cat-icon">
                <HiOutlineDatabase />
              </div>
              <h5>Data Science & Analytics</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="flip-up" className="category-card cat-magenta">
              <div className="cat-icon">
                <HiOutlineSpeakerphone />
              </div>
              <h5>Marketing</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="fade-left" className="category-card cat-blue">
              <div className="cat-icon">
                <HiOutlineHand />
              </div>
              <h5>Accounting & Consulting</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="fade-up-left" className="category-card cat-orange">
              <div className="cat-icon">
                <HiOutlineDeviceMobile />
              </div>
              <h5>IT & Networking</h5>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div data-aos="fade-down-left" className="category-card cat-sky">
              <div className="cat-icon">
                <HiOutlinePhotograph />
              </div>
              <h5>Video & Animation</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategorySection