import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategoryForm = () => {
  const [formData, setFormData] = useState({ category_name: "", description: "" });
  const navigate = useNavigate();
  const API_BASE = "http://localhost:8080/category";

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${API_BASE}/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4 text-success fw-bold">Add New Category</h2>
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
          <button className="btn btn-primary">Add Category</button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
