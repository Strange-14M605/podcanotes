"use client";
import React, { useState } from "react";

//components
import FilterTextbox from "./FilterTextbox";

const FilterNotes = ({ onFilter, removeFilter, getNote }) => {
  const [filter, setFilter] = useState("");

  return (
    <div>
      <form>
      <div className="join py-5">
        <FilterTextbox
          label="filter by tag"
          placeholder="search filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-accent btn-outline join-item"
          onClick={(e) => {
            e.preventDefault();
            onFilter(filter);
          }}
        >
          Filter
        </button>
        {removeFilter && (
        <button
          className="btn btn-warning btn-outline ml-2 join-item"
          onClick={() => {
            setFilter("");
            getNote();
          }}
        >
          Remove Filter
        </button>
      )}
        </div>
      </form>
      
    </div>
  );
};

export default FilterNotes;
