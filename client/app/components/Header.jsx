"use client";
import React, { Fragment, useState } from "react";
import InputTextbox from "./InputTextbox";

const Header = () => {
  const [filter, setFilter] = useState("");

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [url, setURL] = useState("");

  const addNote = async () => {
    try {
      const body = { title, note, tag, url };
      const response = await fetch("http://localhost:5000/note", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: await JSON.stringify(body),
      });

      console.log(response);
      window.location = "/"; 
    } catch (error) {
      console.error(error.message);
    }
  };
  const filterNotes = () => {};

  return (
    // FRAGMENT
    <Fragment>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl pl-16">Podcanotes</a>
        </div>
        <div className="flex-none">
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
              <InputTextbox
                label="Title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <InputTextbox
                label="Note"
                placeholder="Start typing here..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
              <InputTextbox
                label="Tag"
                placeholder="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                required
              />
              <InputTextbox
                label="URL"
                placeholder="URL"
                value={url}
                onChange={(e) => setURL(e.target.value)}
                required
              />
              <div className="navbar mt-8">
                <button
                  type="submit"
                  className="btn btn-warning btn-outline mr-6"
                  onClick={(e) =>{
                    e.preventDefault();
                    addNote();
                  }}
                >
                  Create
                </button>

                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost">
                    Cancel
                  </button>
                </form>
              </div>
            </div>

            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>

        {/* FILTER */}
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
              className="btn btn-warning btn-outline"
              onClick={() => filterNotes()}
            >
              Filter
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
