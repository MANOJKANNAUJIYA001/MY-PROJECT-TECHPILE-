import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import Swal from 'sweetalert2'
const UserPlans = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await axios.get('http://localhost:9000/admin-get-plans')
    setData(res?.data?.result)
  }
  const handlePurchasePlan = (item) => {
    const info = JSON.parse(localStorage.getItem('info'));
    const userId = info?._id;
    const planId = item?._id;
    Swal.fire({
      title: "Are you sure want to purchase this one ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const data = { planId, userId };
        const res = await axios.post('http://localhost:9000/user-purchase-plan', data)
        if (res?.data?.success == true) {
          Swal.fire({
            title: "PurchasePlan",
            text: res?.data?.message,
            icon: "success"
          })
        } else {
          Swal.fire({
            title: "PurchasePlan",
            text: res?.data?.message,
            icon: "error"
          })
        }
      }
    });
  }

  return (
    <section className="pricing-section section-pad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header text-center">
              <p className="eyebrow">MY PLAN &amp; CREDITS</p>
              <h2 className="section-title">
                My Plan &amp; Bidding <span className="underline-word">Credits</span>
              </h2>
              <p className="section-sub">
                Purchase a plan to get monthly credits. Each bid on a project costs <strong>1 credit</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-12">
            <div className="dash-plan-banner text-center mb-0">
              <strong>Current Plan:</strong> Pro · 42 / 50 credits left
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {data?.map((item) => {
            return (<div key={item?._id} className="col-12 col-sm-6 col-lg-4">
              <div className="pricing-card popular h-100">
                {item?.popular && <span className="popular-badge">Most Popular</span>}

                <div className="pricing-card-top">
                  <h4>{item?.name}</h4>
                  <p className="plan-price">
                    ₹{item?.price} <span>/ month</span>
                  </p>
                  <p className="plan-desc">{item?.tagline}</p>
                  <ul className="plan-features list-unstyled">
                    <li className="on">
                      <FaCheck className="feat-icon" />
                      <span>{item?.credits} bidding credits / month</span>
                    </li>
                    <li className="on">
                      <FaCheck className="feat-icon" />
                      <span>Browse all open projects</span>
                    </li>
                    <li className="on">
                      <FaCheck className="feat-icon" />
                      <span>Enhanced portfolio profile</span>
                    </li>
                    <li className="on">
                      <FaCheck className="feat-icon" />
                      <span>Priority bid visibility</span>
                    </li>
                    <li className="off">
                      <FaTimes className="feat-icon" />
                      <span>Bid analytics dashboard</span>
                    </li>
                  </ul>
                </div>
                <div className="pricing-card-bottom">
                  <button onClick={() => handlePurchasePlan(item)} type="button" className="plan-btn plan-btn-solid">
                    Get Plan
                  </button>
                  <p className="plan-footer">50 credits included · 1 credit per bid</p>
                </div>
              </div>
            </div>)
          })}

          {/* PRO */}



        </div>
      </div>
    </section>
  )
}

export default UserPlans