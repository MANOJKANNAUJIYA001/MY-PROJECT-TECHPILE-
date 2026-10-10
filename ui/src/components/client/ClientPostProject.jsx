import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  title: yup.string().required(),
  budget: yup.string().required(),
  duration: yup.string().required(),
  desc: yup.string().required(),
});

const ClientPostProject = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAdd = async (data) => {
    const info = JSON.parse(localStorage.getItem("info"));
    const clientId = info?._id;

    const finalData = { ...data, clientId };

    const res = await axios.post(
      "http://localhost:9000/client-post-project",
      finalData
    );

    if (res?.data?.success === true) {
      Swal.fire({
        title: "Post Project",
        text: res?.data?.message,
        icon: "success",
      });

      reset();
      navigate("/client-manage-projects");
    } else {
      Swal.fire({
        title: "Post Project",
        text: res?.data?.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora for Clients</span>
          <h2 className="dash-heading">Post a New Freelance Project</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div
            className="dash-card"
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "12px",
              padding: "25px",
              background: "#fff",
            }}
          >
           
            <form onSubmit={handleSubmit(handleAdd)}>
              <div className="row g-3">
                {/* Project Title */}
                <div className="col-12">
                  <label className="form-label">Project Title</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.title ? "is-invalid" : ""
                    }`}
                    style={{
                      border: "1px solid #ced4da",
                      borderRadius: "8px",
                    }}
                    placeholder="e.g. Develop React E-commerce Web App"
                    {...register("title")}
                  />
                  <div className="invalid-feedback">
                    {errors.title?.message}
                  </div>
                </div>

                {/* Budget */}
                <div className="col-12 col-sm-6">
                  <label className="form-label">Budget (₹)</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.budget ? "is-invalid" : ""
                    }`}
                    style={{
                      border: "1px solid #ced4da",
                      borderRadius: "8px",
                    }}
                    placeholder="e.g. 50000"
                    {...register("budget")}
                  />
                  <div className="invalid-feedback">
                    {errors.budget?.message}
                  </div>
                </div>

                {/* Timeline */}
                <div className="col-12 col-sm-6">
                  <label className="form-label">Timeline / Deadline</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.duration ? "is-invalid" : ""
                    }`}
                    style={{
                      border: "1px solid #ced4da",
                      borderRadius: "8px",
                    }}
                    placeholder="e.g. 3 weeks"
                    {...register("duration")}
                  />
                  <div className="invalid-feedback">
                    {errors.duration?.message}
                  </div>
                </div>

                {/* Description */}
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea
                    rows={6}
                    className={`form-control ${
                      errors.desc ? "is-invalid" : ""
                    }`}
                    style={{
                      border: "1px solid #ced4da",
                      borderRadius: "8px",
                    }}
                    placeholder="Describe the project scope, deliverables, skills needed..."
                    {...register("desc")}
                  />
                  <div className="invalid-feedback">
                    {errors.desc?.message}
                  </div>
                </div>

                {/* Submit */}
                <div className="col-12">
                  <button type="submit" className="btn btn-orange">
                    Publish Project
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPostProject;