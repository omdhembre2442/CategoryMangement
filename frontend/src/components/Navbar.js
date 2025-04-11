import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-light bg-light px-4 mb-4 shadow-sm">
      <h4 className="fw-bold mb-0 text-primary">Category Manager</h4>
      <button className="btn btn-success" onClick={() => navigate("/add")}>
        + Add Category
      </button>
    </nav>
  );
};

export default Navbar;
