import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CategoryDashboard from "./components/CategoryDashboard";
import AddCategoryForm from "./components/AddCategoryForm";
import EditCategoryForm from "./components/EditCategoryForm";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<CategoryDashboard />} />
      <Route path="/add" element={<AddCategoryForm />} />
      <Route path="/edit/:id" element={<EditCategoryForm />} />
    </Routes>
  </>  
);

export default App;
