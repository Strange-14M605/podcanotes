"use client";
import React,{useState, useEffect} from "react";
import Link from "next/link";
import { useParams } from 'next/navigation'

//components
import EditNote from "./components/EditNote.jsx"
import DeleteNote from "./components/DeleteNote.jsx"

const page = () => {
  const [note, setNote] = useState({})
  const {id} = useParams();
  const note_id = +id;

  const getNote = async()=>{
    try {
      const response = await fetch(`http://localhost:5000/note/${note_id+1}`);
      const jsonData = await response.json();
      setNote(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getNote();
  }, []);

  return (
    <div className="flex flex-wrap justify-between">
      <div className="w-3/4">
        <Link href="/" className="btn btn-circle btn-ghost">
          Back
        </Link>
        <h1>{note.title}</h1>
      <h1>{note.tag}</h1>
      <h1>{note.note}</h1>
      </div>


      <div className="w-1/4">
        <a href={note.url}>{note.url}</a>
        <EditNote />
        <DeleteNote />
      </div>
    </div>
  );
};

export default page;
