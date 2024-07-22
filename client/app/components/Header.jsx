import React from "react";

//components
import NewNote from "./NewNote";
import FilterNotes from "./FilterNotes";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl pl-16">Podcanotes</a>
      </div>

      <NewNote />

      <FilterNotes />
    </div>
  );
};

export default Header;
