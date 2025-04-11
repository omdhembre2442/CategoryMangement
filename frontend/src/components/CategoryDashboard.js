import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const API_BASE = "http://localhost:8080/category";

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${API_BASE}/getCategory`);
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const handleDeactivate = async (id) => {
    if (!window.confirm("Are you sure you want to deactivate this category?")) return;
    await fetch(`${API_BASE}/${id}/deactivate`, { method: "PUT" });
    fetchCategories();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Assign products to a new category before deactivating?")) return;
    await fetch(`${API_BASE}/${id}/delete`, { method: "DELETE" });
    fetchCategories();
  };

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString(); // e.g. 11/04/2025, 3:53 PM
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4 fw-bold text-danger">CATEGORY LIST</h2>
      <hr />
      <div className="row">
        {categories.map((cat) => (
          <div className="col-md-6 col-lg-4 mb-4" key={cat.category_id}>
            <div className={`card h-100 shadow-sm ${cat.status ? "border-success" : "border-danger"}`}>
              <div className="card-body">
                <h5 className="card-title">{cat.category_name}</h5>
                <p className="card-text">{cat.description}</p>

                <div className="d-flex justify-content-between text-muted small mb-2">
                  <div>Created: {cat.created_at ? formatDateTime(cat.created_at) : "N/A"}</div>
                  <div>Modified: {cat.updated_at ? formatDateTime(cat.updated_at) : "N/A"}</div>
                </div>

                <p className="card-text">
                  <small className={cat.status ? "text-success" : "text-danger"}>
                    Status: {cat.status ? "Active" : "Inactive"}
                  </small>
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-success btn-sm" onClick={() => navigate(`/edit/${cat.category_id}`)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(cat.category_id)}>
                <i class="bi bi-trash"></i>
                </button>
                <button className="btn btn-warning btn-sm" onClick={() => handleDeactivate(cat.category_id)}>
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDashboard;
