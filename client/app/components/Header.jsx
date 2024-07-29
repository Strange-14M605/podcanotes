import React from "react";

//components
import NewNote from "./NewNote";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl pl-16">
          Podcanotes
        </a>
      </div>

      <NewNote />
    </div>
  );
};

export default Header;
