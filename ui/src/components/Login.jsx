import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Enter a valid email"),
  password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters").max(18),
  remember: yup.boolean(),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (data) => {
    const res = await axios.post('http://localhost:9000/login', data);
    if (res?.data?.success == true) {
      localStorage.setItem("info", JSON.stringify(res?.data?.result))
      if (res?.data?.result?.type == 'admin') {
        navigate('/admin-dashboard')
      } else if (res?.data?.result?.type == 'client') {
        navigate('/client-dashboard')
      } else if (res?.data?.result?.type == 'user') {
        navigate('/user-dashboard')
      }
    } else {
      Swal.fire({
        title: "Login",
        text: res?.data?.message,
        icon: "error"
      })
    }

  };

  return (
    <div className="login-page d-flex justify-content-center align-items-center">
      <div className="login-card">
        <p className="welcome-text mb-2">WELCOME BACK</p>

        <h1 className="fw-bold mb-2">Sign In</h1>

        <p className="text-muted mb-4">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="create-link">
            Create one free
          </Link>
        </p>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-3">
           
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="form-control"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-danger">{errors.email.message}</p>}
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                {...register("password")}
                className="form-control"
                placeholder="Enter password"
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
          </div>

          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember"
              {...register("remember")}
            />
            <label className="form-check-label" htmlFor="remember">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn login-btn w-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;