"use client";
import React, { useState, useEffect } from "react";

//components
import NoteCard from "./NoteCard";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);

  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/note");
      const jsonData = await response.json();
      setNoteList(jsonData);
      // console.log(noteList);
    } catch (error) {
      console.error(error.message);
    }
  };

  // useEffect(() => {
  // }, [noteList]);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      {noteList.map((note, index) => {
        return (
          <NoteCard
            key={index}
            id={note.note_id}
            title={note.title}
            note={note.note}
            tag={note.tag}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
