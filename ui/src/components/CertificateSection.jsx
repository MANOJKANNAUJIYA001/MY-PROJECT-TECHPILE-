import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const CertificateSection = () => {
  return (
    <section className="cta-section">
      <div className="container position-relative text-center">
        <img src="/images/shape-13.png" alt="" className="cta-dots-left" />
        <img src="/images/shape-10.png" alt="" className="cta-wave-left" />
        <img src="/images/shape-13.png" alt="" className="cta-dots-right" />

        <h2 className="cta-line1">
          Hire. Work. <span>Grow.</span>
        </h2>
        <h3 className="cta-line2">Start Your Journey on Zentora</h3>
        <Link to="/register" className="btn btn-teal cta-btn">
          Get started now <FaArrowRight className="ms-2" />
        </Link>
      </div>
    </section>
  )
}

export default CertificateSection