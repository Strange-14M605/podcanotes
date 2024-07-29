"use client";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [note, setNote] = useState({
    title: '',
    note: '',
    tag: '',
    url: '',
  });
  const { id } = useParams();

  const getNote = async () => {
    try {
      const response = await fetch(`http://localhost:5000/note/${id}`);
      const jsonData = await response.json();
      setNote(jsonData);
      // console.log(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  useEffect(() => {
    getNote();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

//edit function
  const handleSubmit = async () => {
    try {
      const body = {
        title: note.title,
        note: note.note,
        tag: note.tag,
        url: note.url,
      };
      const editNote = await fetch(
        `http://localhost:5000/note/${note.note_id}`,
        {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(body);
      console.log(editNote);
      window.location = `/view/${id}`;
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <Link href={`/view/${id}`} className="btn btn-circle btn-ghost">
        Back
      </Link>
              {/* NOTE */}
              <label className="input input-bordered flex items-center gap-4 my-2">
            Title:
            <input
              type="text"
              name="title"
              className="grow"
              value={note.title}
              onChange={(e) => handleChange(e)}
            />
          </label>

        {/* NOTE */}
        <label className="input input-bordered flex items-center gap-4 my-2">
            Note:
            <input
              type="text"
              name="note"
              className="grow"
              value={note.note}
              onChange={(e) => handleChange(e)}
            />
          </label>
          {/* TAG */}
          <label className="input input-bordered flex items-center gap-4 my-2">
            Tag:
            <input
              type="text"
              name="tag"
              className="grow"
              value={note.tag}
              onChange={(e) => handleChange(e)}
            />
          </label>
          {/* URL */}
          <label className="input input-bordered flex items-center gap-4 my-2">
            URL:
            <input
              type="text"
              name="url"
              className="grow"
              value={note.url}
              onChange={(e) => handleChange(e)}
            />
          </label>
          
            {/* CONFIRM EDIT */}
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}>
            <button
              type="submit"
              className="btn btn-warning btn-outline mr-6">
              Confirm Edit
            </button>
            </form>
            <Link href={`/view/${id}`} className="btn btn-circle btn-ghost">
        Cancel
      </Link>

    </Fragment>
  );
};

export default page;
