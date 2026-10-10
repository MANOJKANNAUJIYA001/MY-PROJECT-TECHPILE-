import React from 'react'
import { FaCalendarAlt, FaRegCommentDots } from 'react-icons/fa'

const ArticleSection = () => {
  return (
    <section className="article-section section-pad">
      <div className="container position-relative">
        <img src="/images/shape-13.png" alt="" className="article-dots-tl" />
        <img src="/images/shape-06.png" alt="" className="article-ring" />
        <img src="/images/shape-13.png" alt="" className="article-dots-br" />

        <div className="section-header text-center">
          <p className="eyebrow">LATEST ARTICLES</p>
          <h2 className="section-title">
            Zentora Insights &amp; <span className="underline-word">Updates</span>
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <article className="article-card">
              <div className="article-img-wrap">
                <img src="/images/course-07-750x750.jpg" alt="Learning Guide" />
              </div>
              <div className="article-body">
                <span className="article-cat">SCIENCE</span>
                <h5>Crafting Effective Learning Guide Line</h5>
                <div className="article-meta">
                  <span><FaCalendarAlt /> 15 Nov, 2023</span>
                  <span><FaRegCommentDots /> Com 0</span>
                </div>
                <p>
                  Discover how structured learning paths help freelancers and teams
                  ship better work on Zentora.
                </p>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-6">
            <article className="article-card">
              <div className="article-img-wrap">
                <img src="/images/course-09-750x750.jpg" alt="Learning Landscapes" />
              </div>
              <div className="article-body">
                <span className="article-cat">TECHNOLOGY</span>
                <h5>Exploring Learning Landscapes in Academic</h5>
                <div className="article-meta">
                  <span><FaCalendarAlt /> 14 Nov, 2023</span>
                  <span><FaRegCommentDots /> Com 3</span>
                </div>
                <p>
                  From remote collaboration to escrow-backed delivery — the new
                  playbook for digital projects.
                </p>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-md-6">
            <article className="article-card">
              <div className="article-img-wrap">
                <img src="/images/course-79-750x750.jpg" alt="Education Hub" />
              </div>
              <div className="article-body">
                <span className="article-cat">LEARNING</span>
                <h5>Voices from the Learning Education Hub</h5>
                <div className="article-meta">
                  <span><FaCalendarAlt /> 13 Nov, 2023</span>
                  <span><FaRegCommentDots /> Com 0</span>
                </div>
                <p>
                  Stories from clients and freelancers building careers without
                  borders on Zentora.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArticleSection