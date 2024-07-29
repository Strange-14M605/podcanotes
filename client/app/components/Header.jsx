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
          Podcanotes : your podcast note-taker
        </a>
      </div>
      <NewNote />
      <Theme />
    </div>
  );
};

export default Header;
