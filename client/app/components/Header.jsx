"use client"
import React, {useState} from "react";

//components
import NewNote from "./NewNote";
import Theme from "./Theme"

const Header = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Podcanotes
        </a>
      </div>
      <Theme />
      <NewNote />
    </div>
  );
};

export default Header;
