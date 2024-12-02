import React from "react";
import { useNavigate } from "react-router-dom";

const CustomPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h2>Custom Rune Set</h2>
      <div className="mt-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/custom/rune-selection")}
        >
          Select Runes
        </button>
      </div>
    </div>
  );
};

export default CustomPage;
