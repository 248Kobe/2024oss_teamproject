import React from "react";

const MyCustomList = ({ customList, onRemove }) => {
  return (
    <div>
      {customList.length === 0 ? (
        <p>No custom combinations added yet.</p>
      ) : (
        <ul className="list-group">
          {customList.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <strong>Champion:</strong> {item.champion} <br />
                <strong>Rune:</strong> {item.rune}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onRemove(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyCustomList;
