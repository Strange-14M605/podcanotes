"use client";
import React, { Fragment, useState } from "react";

const Header = () => {
  const [filter, setFilter] = useState("");

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [url, setURL] = useState("");

  const addNote = () => {};
  const filterNotes = () => {};

  return (
    <Fragment>
      <h1>Podcanotes</h1>
      {/* NEW */}
      <button
        className="btn btn-warning btn-outline"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        New
      </button>

      {/* modal */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Start typing here..."
              onChange={(e) => setNote(e.target.value)}
              value={note}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="tag"
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="URL"
              onChange={(e) => setURL(e.target.value)}
              value={url}
              required
            />
          </label>          <button
            type="submit"
            className="btn btn-warning btn-outline"
            onClick={() => addNote()}
          >
            Create
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* FILTER */}
      <form>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          type="submit"
          className="btn btn-warning btn-outline"
          onClick={() => filterNotes()}
        >
          Filter
        </button>
      </form>
    </Fragment>
  );
};

export default Header;
