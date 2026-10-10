import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const schema = yup.object({
  name: yup.string().required().min(2),
  credits: yup.string().required().min(1),
  price: yup.string().required().min(1),
  tagline: yup.string().required().min(3),
  popular: yup.boolean(),
});

const AdminPlans = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const res = await axios.get('http://localhost:9000/admin-get-plans');
    setData(res?.data?.result)
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),

  });

  const onSubmit = async (data) => {
    const res = await axios.post('http://localhost:9000/admin-create-plan', data);
    if (res?.data?.success == true) {
      Swal.fire({
        title: "Plan",
        text: res?.data?.message,
        icon: "success"
      })
      reset()
      fetchData()
    } else {
      Swal.fire({
        title: "Plan",
        text: res?.data?.message,
        icon: "error"
      })
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12">
          <span className="dash-eyebrow">Zentora Admin</span>
          <h2 className="dash-heading">Freelancer Credit Plan Management</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="dash-card">
            <div className="row mb-3">
              <div className="col-12">
                <h4>Freelancer Credit Plan Management</h4>
                <p className="text-secondary mb-0">
                  Add new credit plans from here. Each bid deducts 1 credit from the freelancer&apos;s balance. New plans appear on the landing page and freelancer dashboard.
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="dash-box mb-0">
                  <h5>Add New Plan</h5>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-3">
                      <div className="col-12 col-sm-3">
                        <label className="form-label">Plan Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. BUSINESS"
                          {...register("name")}
                        />
                        {errors.name && <p className="text-danger">{errors.name.message}</p>}
                      </div>

                      <div className="col-12 col-sm-3">
                        <label className="form-label">Monthly Credits</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="e.g. 100"
                          {...register("credits")}
                        />
                        {errors.credits && <p className="text-danger">{errors.credits.message}</p>}
                      </div>

                      <div className="col-12 col-sm-3">
                        <label className="form-label">Price (₹ / month)</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="e.g. 999"
                          {...register("price")}
                        />
                        {errors.price && <p className="text-danger">{errors.price.message}</p>}
                      </div>

                      <div className="col-12 col-sm-3">
                        <label className="form-label">Short Tagline</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. For growing freelancers"
                          {...register("tagline")}
                        />
                        {errors.tagline && <p className="text-danger">{errors.tagline.message}</p>}
                      </div>

                      <div className="col-12">
                        <div className="row align-items-center g-3">
                          <div className="col-auto">
                            <div className="form-check mb-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="planFeatured"
                                {...register("popular")}
                              />
                              <label className="form-check-label fw-semibold" htmlFor="planFeatured">
                                Mark as Most Popular
                              </label>
                            </div>
                          </div>
                          <div className="col-auto">
                            <button type="submit" className="btn btn-orange">
                              <FaPlus /> Add Plan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <h5 className="mb-0">All Plans List</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table dash-table mb-0">
                    <thead>
                      <tr>
                        <th>Plan Name</th>
                        <th>Monthly Credits</th>
                        <th>Tag Line</th>
                        <th>Price / Mo</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        data?.map((item) => {
                          return (
                            <tr>
                              <td>{item?.name}</td>
                              <td>{item?.credits}</td>
                              <td>{item?.tagline}</td>
                              <td>₹{item?.price}</td>
                              <td>
                                <button type="button" className="action-btn action-btn-delete">
                                  <FaTrash /> Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })
                      }


                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlans;