import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from "axios";
import Swal from "sweetalert2";
const schema = yup
  .object()
  .shape({
    type: yup.string().oneOf(["client", "user"]).required(),
    name: yup.string().required().min(2).max(18),
    email: yup.string().required().email(),
    password: yup.string().required().min(8).max(18),
    cpassword: yup.string().oneOf([yup.ref('password')]).required()
  })
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const handleRegister = async (data) => {
    const res = await axios.post('http://localhost:9000/register', data)
    if (res?.data?.success == true) {
      Swal.fire({
        title: "Register",
        text: res?.data?.message,
        icon: "success"
      })
    } else {
      Swal.fire({
        title: "Register",
        text: res?.data?.message,
        icon: "error"
      })
    } 
  }
  return (
    <div className="register-page d-flex justify-content-center align-items-center">
      <div className="register-card">
        <p className="text-uppercase small-title mb-2">Get Started</p>

        <h1 className="fw-bold mb-2">Create Account</h1>

        <p className="text-muted mb-4">
          Already have an account?{" "}
          <a href="/login" className="signin-link">
            Sign in here
          </a>
        </p>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Register As</label>
              <select {...register('type')} className="form-select">
                <option value='client'>Client — I want to hire</option>
                <option value='user'>Freelancer — I want to work</option>
              </select>
              {errors.type && <p className="text-danger">{errors.type.message}</p>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Full Name / Company
              </label>
              <input
                {...register('name')}
                type="text"
                className="form-control"
                placeholder="Your name or company"
              />
              {errors.name && <p className="text-danger">{errors.name.message}</p>}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              {...register('email')}
              className="form-control"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                {...register('password')}
                className="form-control"
                placeholder="Min. 6 characters"
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">
                Confirm Password
              </label>
              <input
                {...register('cpassword')}
                type="password"
                className="form-control"
                placeholder="Re-enter password"
              />
              {errors.cpassword && <p className="text-danger">{errors.cpassword.message}</p>}
            </div>
          </div>

          <button type="submit" className="btn register-btn w-100">
            Create Account
          </button>

          <p className="text-center text-muted mt-3 small">
            Admin accounts are created by the platform team only — not available
            via registration.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;