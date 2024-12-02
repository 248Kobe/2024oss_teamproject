import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to the League of Legends Rune Manager</h1>
      <p className="lead">
        Customize your champion's runes and save your personalized rune sets.
      </p>
      <div className="d-flex justify-content-center mt-4">
        {/* 네비게이션 버튼 */}
        <Link to="/champions" className="btn btn-primary mx-2">
          View Champions
        </Link>
        <Link to="/runes" className="btn btn-secondary mx-2">
          Select Runes
        </Link>
        <Link to="/mylist" className="btn btn-success mx-2">
          My Rune Sets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
