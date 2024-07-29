"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams,useRouter } from "next/navigation";

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
      <div className="w-3/4 pl-5">
        <Link href="/" className="btn btn-circle btn-ghost mb-8 underline underline-offset-4">
          Back
        </Link>
        <h1 className="text-2xl font-semibold mb-2">{note.title}</h1>
        <div className=" bg-amber-200 rounded-full px-5 w-20">
        <h1 className="mb-5">{note.tag}</h1>
        </div>
        <h1 className="text-lg">{note.note}</h1>
      </div>

      <div className="w-1/4">
        <a href={note.url}>{note.url}</a>
        {/* <EditNote id={id} /> */}
        <button type="button" onClick={() => router.push(`/view/${id}/edit-${id}`)} className="btn btn-warning btn-outline">
          Edit
        </button>
        <DeleteNote id={id} />
      </div>
    </div>
  );
};

export default page;
