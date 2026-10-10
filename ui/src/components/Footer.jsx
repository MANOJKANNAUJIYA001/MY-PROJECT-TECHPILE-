import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaCheck,
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaChevronUp,
} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-3 col-md-6">
            <Link to="/" className="footer-brand d-flex align-items-center gap-2">
              <span className="brand-icon"><FaCheck /></span>
              <span className="brand-text">Zentora</span>
            </Link>
            <p className="footer-about">
              Zentora — Where Talent Meets Opportunity. The future of freelancing
              is here. Connect. Collaborate. Earn.
            </p>
            <p className="footer-contact"><b>Add:</b> 70-80 Upper St Norwich NR2</p>
            <p className="footer-contact"><b>Call:</b> +01 123 5641 231</p>
            <p className="footer-contact"><b>Email:</b> hello@zentora.com</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Zentora Platform</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/services">Browse Projects</Link></li>
              <li><Link to="/services">Find Freelancers</Link></li>
              <li><Link to="/register">Post a Project</Link></li>
              <li><Link to="/about-us">How It Works</Link></li>
              <li><Link to="/about-us">Success Stories</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/services">Gallery</Link></li>
              <li><Link to="/">News &amp; Articles</Link></li>
              <li><Link to="/contact-us">FAQ&apos;s</Link></li>
              <li><Link to="/">Coming Soon</Link></li>
              <li><Link to="/login">Sign In/Registration</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5>Contacts</h5>
            <p className="footer-about">
              Enter your email address to register to our newsletter subscription
            </p>
            <form
              className="footer-subscribe"
              onSubmit={(e) => {
                e.preventDefault()
                setEmail('')
              }}
            >
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-teal">
                Subscribe <FaArrowRight className="ms-1" />
              </button>
            </form>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="facebook" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="linkedin" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="twitter" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="youtube" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright 2026 <span>Zentora</span> — Hire. Work. Grow. All Rights Reserved
          </p>
          <button type="button" className="scroll-top" onClick={scrollTop} aria-label="Scroll to top">
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer