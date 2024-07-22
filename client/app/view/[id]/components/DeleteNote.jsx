import React from 'react'

const DeleteNote = () => {


  const deleteNote = async()=>{
    try {
      console.log("delete function");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div className="flex-none">
      <button
        className="btn btn-warning btn-outline"
        onClick={()=> deleteNote()}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteNote
