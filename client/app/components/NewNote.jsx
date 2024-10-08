"use client";
import React, { useState } from "react";

//components
import InputTextbox from "./InputTextbox";

const NewNote = () => {
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
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex-none">
      <button
        className="btn btn-accent btn-outline"
        onClick={() => document.getElementById("new_modal").showModal()}
      >
        New
      </button>

      {/* modal */}
      <dialog id="new_modal" className="modal modal-content">
        <div className="modal-box w-3/4">
          <InputTextbox
            label="Title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label>
        Note:
        <textarea
          className="textarea textarea-bordered resize-y resize-x-none rounded-md w-full"
          placeholder="Start typing here..."
          rows="10"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        ></textarea>
      </label>

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
              className="btn btn-accent btn-outline mr-6"
              onClick={(e) => {
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
  );
};

export default NewNote;
