"use client";
import React, { useState, useEffect} from "react";

//components
import NoteCard from "./NoteCard";
import FilterNotes from "./FilterNotes";

const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const [removeFilter, setRemoveFilter] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/note");
      const jsonData = await response.json();
      setNoteList(jsonData);
      if (jsonData.length === 0) {
        setErrorMsg(
          "No notes found! Create a new note using the 'New' button above."
        );
      } else {
        setErrorMsg("");
      }
      setRemoveFilter(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onFilter = async (tag) => {
    try {
      const response = await fetch(`http://localhost:5000/note/filter/${tag}`);
      const jsonData = await response.json();
      setNoteList(jsonData);
      if (jsonData.length === 0) {
        setErrorMsg(
          "There are no notes with this filter. Create a new note using the 'New' button above."
        );
      } else {
        setErrorMsg("");
      }
      setRemoveFilter(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <FilterNotes
        onFilter={onFilter}
        removeFilter={removeFilter}
        getNote={getNotes}
      />
      <div className="grid grid-cols-3 gap-6">
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
      <div className="text-lg py-10">
      {errorMsg}
      </div>
    </div>
  );
};

export default NoteList;
