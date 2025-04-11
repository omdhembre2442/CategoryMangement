import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditCategoryForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ category_name: "", description: "" });
  const navigate = useNavigate();
  const API_BASE = "http://localhost:8080/category";

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch(`${API_BASE}/getCat/${id}`);
      const data = await res.json();
      setFormData(data);
    };
    fetchCategory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API_BASE}/${id}/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 text-warning fw-bold">Edit Category</h2>
      <div className="card p-4 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Category Name</label>
            <input
              className="form-control"
              value={formData.category_name}
              onChange={(e) => setFormData({ ...formData, category_name: e.target.value })}
              required
            />
          </div>
          <div className="mb-3">
            <label>Description</label>
            <textarea
              className="form-control"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
          </div>
          <button className="btn btn-primary">Update Category</button>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryForm;
