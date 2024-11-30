import React from "react";

const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  filterOptions,
}) => {
  return (
    <div className="mb-4">
      {/* 검색 입력 */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 필터링 옵션 */}
      {filterOptions && (
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default SearchFilter;
