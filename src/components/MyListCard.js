import React from "react";

const MyListCard = ({ set }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{set.champion.name}</h5>
          <p className="card-text">
            <strong>Primary Rune:</strong> {set.primaryRune.name}
          </p>
          <p className="card-text">
            <strong>Secondary Rune:</strong> {set.secondaryRune.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyListCard;
