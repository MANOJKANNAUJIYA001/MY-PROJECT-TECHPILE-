import React from 'react'
import { FiShare2 } from 'react-icons/fi'

const TalentSection = () => {
  return (
    <section className="talent-section section-pad">
      <div className="container">
        <div className="section-header text-center">
          <p className="eyebrow">TOP TALENT</p>
          <h2 className="section-title">
            Featured <span className="underline-word">Freelancers</span> on Zentora
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="talent-card">
              <div className="talent-img-wrap">
                <img src="/images/team-01.webp" alt="Jane Seymour" className="talent-img" />
                <button type="button" className="share-btn" aria-label="Share">
                  <FiShare2 />
                </button>
              </div>
              <h5>Jane Seymour</h5>
              <p>UI Designer</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="talent-card">
              <div className="talent-img-wrap">
                <img src="/images/team-02.webp" alt="Edward Norton" className="talent-img" />
                <button type="button" className="share-btn" aria-label="Share">
                  <FiShare2 />
                </button>
              </div>
              <h5>Edward Norton</h5>
              <p>Web Developer</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="talent-card">
              <div className="talent-img-wrap">
                <img src="/images/team-03.webp" alt="Penelope Cruz" className="talent-img" />
                <button type="button" className="share-btn" aria-label="Share">
                  <FiShare2 />
                </button>
              </div>
              <h5>Penelope Cruz</h5>
              <p>Digital Marketer</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="talent-card">
              <div className="talent-img-wrap">
                <img src="/images/team-04.webp" alt="John Travolta" className="talent-img" />
                <button type="button" className="share-btn" aria-label="Share">
                  <FiShare2 />
                </button>
              </div>
              <h5>John Travolta</h5>
              <p>WordPress Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TalentSection