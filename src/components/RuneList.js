import React from "react";

const RuneList = ({ runes }) => {
  return (
    <div className="row">
      {runes.map((rune) => (
        <div className="col-md-4 mb-4" key={rune.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{rune.name}</h5>
              <p>
                <strong>Category:</strong> {rune.category}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RuneList;
