import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaCheck, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const [data, setData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('info'));
    setData(info)
  }, [location.pathname])


  if (data?.type == 'admin') {
    return <AdminMenu />
  } else if (data?.type == 'client') {
    return <ClientMenu />
  }
  else if (data?.type == 'user') {
    return <UserMenu />
  } else {
    return <CommonMenu />
  }
}

const CommonMenu = () => {
  return (<>
    <header className="zentora-nav sticky-top">
      {/* Top bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center g-2">
            <div className="col-12 col-sm-7">
              <div className="row align-items-center g-2 g-sm-3">
                <div className="col-auto">
                  <a href="tel:+18009368672" className="top-bar-link">
                    <FaPhoneAlt className="top-bar-icon" />
                    Call: +1 (800) ZENTORA
                  </a>
                </div>
                <div className="col-auto d-none d-md-block">
                  <span className="top-bar-sep">|</span>
                </div>
                <div className="col-auto">
                  <a href="mailto:support@zentora.com" className="top-bar-link">
                    <FaEnvelope className="top-bar-icon" />
                    Email: support@zentora.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-5">
              <div className="row align-items-center justify-content-sm-end g-2">
                <div className="col-auto">
                  <Link to="/login" className="top-bar-link">Login / Register</Link>
                </div>
                <div className="col-auto">
                  <Link to="/client-post-projects" className="top-bar-btn">
                    Post a Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main menu: logo left, menu center (pehle jahan tha) */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container position-relative">
          <div className="row w-100 align-items-center g-0">
            {/* Logo — left */}
            <div className="col-auto">
              <Link className="navbar-brand d-inline-flex align-items-center gap-2 m-0" to="/">
                <span className="brand-icon">
                  <FaCheck />
                </span>
                <span className="brand-text">
                  Zen<span className="brand-accent">tora</span>
                </span>
              </Link>
            </div>

            {/* Toggle (mobile) */}
            <div className="col-auto ms-auto d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zentoraNav"
                aria-controls="zentoraNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            {/* Menu — same center position as before */}
            <div className="col-12 col-lg-auto nav-menu-wrap">
              <div className="collapse navbar-collapse" id="zentoraNav">
                <ul className="navbar-nav flex-lg-row align-items-lg-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" end>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about-us">About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-us">Contact</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

const AdminMenu = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('info');
    navigate('/')
  }
  return (<>
    <header className="zentora-nav">
      {/* Top bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center g-2">
            <div className="col-12 col-sm-7">
              <div className="row align-items-center g-2 g-sm-3">
                <div className="col-auto">
                  <a href="tel:+18009368672" className="top-bar-link">
                    <FaPhoneAlt className="top-bar-icon" />
                    Call: +1 (800) ZENTORA
                  </a>
                </div>
                <div className="col-auto d-none d-md-block">
                  <span className="top-bar-sep">|</span>
                </div>
                <div className="col-auto">
                  <a href="mailto:support@zentora.com" className="top-bar-link">
                    <FaEnvelope className="top-bar-icon" />
                    Email: support@zentora.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-5">
              <div className="row align-items-center justify-content-sm-end g-2">
                <div className="col-auto">
                  <Link to="/login" className="top-bar-link">Login / Register</Link>
                </div>
                <div className="col-auto">
                  <Link to="/client-post-projects" className="top-bar-btn">
                    Post a Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main menu: logo left, menu center (pehle jahan tha) */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container position-relative">
          <div className="row w-100 align-items-center g-0">
            {/* Logo — left */}
            <div className="col-auto">
              <Link className="navbar-brand d-inline-flex align-items-center gap-2 m-0" to="/">
                <span className="brand-icon">
                  <FaCheck />
                </span>
                <span className="brand-text">
                  Zen<span className="brand-accent">tora</span>
                </span>
              </Link>
            </div>

            {/* Toggle (mobile) */}
            <div className="col-auto ms-auto d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zentoraNav"
                aria-controls="zentoraNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            {/* Menu — same center position as before */}
            <div className="col-12 col-lg-auto nav-menu-wrap">
              <div className="collapse navbar-collapse" id="zentoraNav">
                <ul className="navbar-nav flex-lg-row align-items-lg-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-dashboard" end>Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-users">Users</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-clients">Client</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-plans">Plans</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-project">Project</NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-bids">Bids</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin-profile">Profile</NavLink>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

const ClientMenu = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('info');
    navigate('/')
  }
  return (<>
    <header className="zentora-nav">
      {/* Top bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center g-2">
            <div className="col-12 col-sm-7">
              <div className="row align-items-center g-2 g-sm-3">
                <div className="col-auto">
                  <a href="tel:+18009368672" className="top-bar-link">
                    <FaPhoneAlt className="top-bar-icon" />
                    Call: +1 (800) ZENTORA
                  </a>
                </div>
                <div className="col-auto d-none d-md-block">
                  <span className="top-bar-sep">|</span>
                </div>
                <div className="col-auto">
                  <a href="mailto:support@zentora.com" className="top-bar-link">
                    <FaEnvelope className="top-bar-icon" />
                    Email: support@zentora.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-5">
              <div className="row align-items-center justify-content-sm-end g-2">
                <div className="col-auto">
                  <Link to="/login" className="top-bar-link">Login / Register</Link>
                </div>
                <div className="col-auto">
                  <Link to="/client-post-projects" className="top-bar-btn">
                    Post a Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main menu: logo left, menu center (pehle jahan tha) */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container position-relative">
          <div className="row w-100 align-items-center g-0">
            {/* Logo — left */}
            <div className="col-auto">
              <Link className="navbar-brand d-inline-flex align-items-center gap-2 m-0" to="/">
                <span className="brand-icon">
                  <FaCheck />
                </span>
                <span className="brand-text">
                  Zen<span className="brand-accent">tora</span>
                </span>
              </Link>
            </div>

            {/* Toggle (mobile) */}
            <div className="col-auto ms-auto d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zentoraNav"
                aria-controls="zentoraNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            {/* Menu — same center position as before */}
            <div className="col-12 col-lg-auto nav-menu-wrap">
              <div className="collapse navbar-collapse" id="zentoraNav">
                <ul className="navbar-nav flex-lg-row align-items-lg-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/client-dashboard" end>Dashbaord</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/client-post-projects">Post Project</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/client-manage-projects">Manage</NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/client-profile">Profile</NavLink>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

const UserMenu = () => {
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('info');
    navigate('/')
  }
  return (<>
    <header className="zentora-nav">
      {/* Top bar */}
      <div className="header-top-bar">
        <div className="container">
          <div className="row align-items-center g-2">
            <div className="col-12 col-sm-7">
              <div className="row align-items-center g-2 g-sm-3">
                <div className="col-auto">
                  <a href="tel:+18009368672" className="top-bar-link">
                    <FaPhoneAlt className="top-bar-icon" />
                    Call: +1 (800) ZENTORA
                  </a>
                </div>
                <div className="col-auto d-none d-md-block">
                  <span className="top-bar-sep">|</span>
                </div>
                <div className="col-auto">
                  <a href="mailto:support@zentora.com" className="top-bar-link">
                    <FaEnvelope className="top-bar-icon" />
                    Email: support@zentora.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-5">
              <div className="row align-items-center justify-content-sm-end g-2">
                <div className="col-auto">
                  <Link to="/login" className="top-bar-link">Login / Register</Link>
                </div>
                <div className="col-auto">
                  <Link to="/client-post-projects" className="top-bar-btn">
                    Post a Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main menu: logo left, menu center (pehle jahan tha) */}
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container position-relative">
          <div className="row w-100 align-items-center g-0">
            {/* Logo — left */}
            <div className="col-auto">
              <Link className="navbar-brand d-inline-flex align-items-center gap-2 m-0" to="/">
                <span className="brand-icon">
                  <FaCheck />
                </span>
                <span className="brand-text">
                  Zen<span className="brand-accent">tora</span>
                </span>
              </Link>
            </div>

            {/* Toggle (mobile) */}
            <div className="col-auto ms-auto d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#zentoraNav"
                aria-controls="zentoraNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            {/* Menu — same center position as before */}
            <div className="col-12 col-lg-auto nav-menu-wrap">
              <div className="collapse navbar-collapse" id="zentoraNav">
                <ul className="navbar-nav flex-lg-row align-items-lg-center">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-dashboard" end>Dashboard</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-plans">Plans</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-project">Projects</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-bids">Bids</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user-profile">Profile</NavLink>
                  </li>

                  <li className="nav-item">
                    <button className="nav-link" onClick={logout}>Logout</button>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

export default Navbar