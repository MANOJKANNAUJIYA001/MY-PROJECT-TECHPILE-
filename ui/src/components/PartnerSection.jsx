import React from 'react'

const PartnerSection = () => {
  return (
    <section className="partner-section section-pad">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5 col-md-12 position-relative">
            <img src="/images/shape-13.png" alt="" className="partner-dots" />
            <p className="eyebrow">TRUSTED BY TEAMS</p>
            <h2 className="section-title text-start">
              Companies That Hire on{' '}
              <span className="underline-word">Zentora</span>
            </h2>
            <p className="section-sub text-start ms-0">
              From startups to enterprises — global businesses use Zentora to find
              talent and get work done without borders.
            </p>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="brand-box">
              <div className="row g-0">
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-01.png" alt="Partner 1" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-02.png" alt="Partner 2" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-03.png" alt="Partner 3" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-04.png" alt="Partner 4" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-05.png" alt="Partner 5" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-06.png" alt="Partner 6" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-07.png" alt="Partner 7" />
                </div>
                <div className="col-6 col-md-3 brand-cell">
                  <img src="/images/brand-08.png" alt="Partner 8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerSection