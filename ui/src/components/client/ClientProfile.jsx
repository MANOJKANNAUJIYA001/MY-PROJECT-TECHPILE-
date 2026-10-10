import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import Swal from 'sweetalert2'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  location: yup.string().required('Location is required'),
  bio: yup.string().required('Bio is required'),
  password: yup.string().required('Current password is required'),
  npassword: yup.string(),
  cpassword: yup.string().test('match', 'Passwords must match', function (value) {
    const { npassword } = this.parent
    if (!npassword) return true
    return value === npassword
  }),
})

const ClientProfile = () => {
  const info = JSON.parse(localStorage.getItem('info'))

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: info?.name || '',
      email: info?.email || '',
      phone: info?.phone || '',
      location: info?.location || '',
      bio: info?.bio || '',
      password: '',
      npassword: '',
      cpassword: '',
    },
  })

  const onSubmit = async (data) => {
    const finalData = {
      _id: info?._id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      location: data.location,
      bio: data.bio,
      password: data.password,
      npassword: data.npassword || '',
    }

    const res = await axios.put('http://localhost:9000/client-profile-update', finalData)

    if (res?.data?.success === true) {
      localStorage.setItem(
        'info',
        JSON.stringify({
          ...info,
          name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.location,
          bio: data.bio,
        })
      )
      Swal.fire({
        title: 'Profile',
        text: res?.data?.message,
        icon: 'success',
      })
    } else {
      Swal.fire({
        title: 'Profile',
        text: res?.data?.message,
        icon: 'error',
      })
    }
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Clients</span>
          <h2 className="dash-heading">Client Dashboard</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>My Profile &amp; Settings</h4>
                <p className="text-secondary mb-0">
                  Update your photo, contact info, and password to enhance your Zentora profile.
                </p>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <div className="profile-photo-card mb-0">
                  <h5>Profile Photo</h5>
                  <div className="row align-items-center g-3">
                    <div className="col-12 col-sm-3">
                      <div className="profile-avatar-wrap">R</div>
                    </div>
                    <div className="col-12 col-sm-9">
                      <p className="text-secondary mb-3">Upload a clear profile photo. JPG or PNG, maximum 2MB.</p>
                      <div className="row g-2">
                        <div className="col-auto">
                          <label className="profile-upload-btn mb-0">
                            <FaCamera /> Choose Photo
                            <input type="file" accept="image/*" hidden />
                          </label>
                        </div>
                        <div className="col-auto">
                          <button type="button" className="btn btn-orange btn-sm">Save Photo</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="profile-details-card mb-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>Account Details</h5>
                    <div className="row g-3 mb-3">
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Full Name / Company</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          {...register('name')}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          {...register('email')}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          {...register('phone')}
                        />
                        {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Location</label>
                        <input
                          type="text"
                          className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                          {...register('location')}
                        />
                        {errors.location && <div className="invalid-feedback">{errors.location.message}</div>}
                      </div>
                    </div>

                    <h5 className="profile-section-title">Company Details</h5>
                    <div className="row g-3 mb-3">
                      <div className="col-12">
                        <label className="form-label">About Company / Hiring Needs</label>
                        <textarea
                          className={`form-control ${errors.bio ? 'is-invalid' : ''}`}
                          rows="4"
                          {...register('bio')}
                        />
                        {errors.bio && <div className="invalid-feedback">{errors.bio.message}</div>}
                      </div>
                    </div>

                    <h5 className="profile-section-title">Change Password</h5>
                    <div className="row g-3 mb-3">
                      <div className="col-12">
                        <label className="form-label">Current Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="Required to save changes"
                          {...register('password')}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">New Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.npassword ? 'is-invalid' : ''}`}
                          placeholder="Leave blank to keep current password"
                          {...register('npassword')}
                        />
                        {errors.npassword && <div className="invalid-feedback">{errors.npassword.message}</div>}
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label">Confirm New Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`}
                          placeholder="Re-enter new password"
                          {...register('cpassword')}
                        />
                        {errors.cpassword && <div className="invalid-feedback">{errors.cpassword.message}</div>}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <button type="submit" className="btn btn-orange">Save Profile Changes</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientProfile