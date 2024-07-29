"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

//components
import DeleteNote from "../../components/DeleteNote.jsx";

const page = () => {
  const router = useRouter();
  const [note, setNote] = useState({});
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

  return (
    <div className="flex flex-wrap justify-between">
      
      {/* LEFT */}
      <div className="flex w-full">
        <div className="w-10/12 pl-5">
          <Link
            href="/"
            className="btn btn-circle btn-ghost mb-6 underline underline-offset-4"
          >
            Back
          </Link>
          <h1 className="text-2xl font-semibold mb-2">{note.title}</h1>
          <div className="w-1/4">
          <div className=" bg-primary rounded-full px-5">
            <h1 className="mb-5 py-2">{note.tag}</h1>
          </div>
          </div>
          <div>
          <pre className="text-sm text-pretty w-full">{note.note}</pre>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="divider divider-horizontal my-6"></div>

        {/* RIGHT */}
        <div className="w-2/12">

        <button
          type="button"
          onClick={() => router.push(`/view/${id}/edit-${id}`)}
          className="btn btn-accent btn-outline my-5"
        >
          Edit
        </button>
        <DeleteNote id={id} />
        <a className="link link-accent" href={note.url}>Read more...</a>
      </div>
      </div>
    </div>
  );
};

export default page;
