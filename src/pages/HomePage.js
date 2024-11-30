import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="text-center">
      <p>Welcome to the League of Legends Champion and Rune Manager!</p>
      <Link to="/champions" className="btn btn-primary mx-2">
        View Champions
      </Link>
      <Link to="/runes" className="btn btn-primary mx-2">
        View Runes
      </Link>
      <Link to="/custom" className="btn btn-primary mx-2">
        My Custom Combinations
      </Link>
    </div>
  );
};

export default HomePage;
