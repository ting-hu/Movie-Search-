import React, { useState } from "react";
import "./filter.css";

const Filter = ({ categories, onFilterChange, selectedGenres, handleAll }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickCategory = (category) => {
    onFilterChange(category.id);
  };

  const isAllSelected = selectedGenres.size === categories.length;

  return (
    <div className="filter-container">
      <button className="btn-filter" onClick={handleOpen}>
        <span>Filter</span>
      </button>
      {isOpen ? (
        <div className="filter-category-container">
          <button
            className={`btn-category-${isAllSelected}`}
            onClick={handleAll}>
            All
          </button>

          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`btn-category-${selectedGenres.has(category.id)}`}
                onClick={(e) => handleClickCategory(category)}>
                {category.name}
              </button>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Filter;
