import React from "react";
import { useRouter } from 'next/navigation'

const DeleteNote = ({id}) => {
  const router = useRouter();

  const deleteNote = async () => {
    try {
      // console.log(id);
      const response = await fetch(`http://localhost:5000/note/${id}`,{
        method:"DELETE"
      });
      router.push(`/`)
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex-none">
      <button
        className="btn btn-warning btn-outline"
        onClick={() => deleteNote()}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteNote;
