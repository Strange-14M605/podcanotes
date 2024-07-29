"use client";
import React, { useState } from "react";

//components
import InputTextbox from "./InputTextbox";

const FilterNotes = ({ onFilter, removeFilter, getNote }) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="navbar flex-1">
      <form>
        <InputTextbox
          label="filter by tag"
          placeholder="search filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          required
        />
        <button
          type="submit"
          className="btn btn-warning btn-outline ml-2"
          onClick={(e) => {
            e.preventDefault();
            onFilter(filter);
          }}
        >
          Filter
        </button>
      </form>
      {removeFilter && (
        <button
          className="btn btn-warning btn-outline ml-2"
          onClick={() => {
            setFilter("");
            getNote();
          }}
        >
          Remove Filter
        </button>
      )}
    </div>
  );
};

export default FilterNotes;
