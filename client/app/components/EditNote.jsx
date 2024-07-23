import React from 'react'

const EditNote = () => {

  const editNote = async()=>{
    try {
    
    } catch (error) {
      console.error(error.message);
    }
      }

  return (
    <div className="flex-none">
      <button
        className="btn btn-warning btn-outline"
        onClick={() => document.getElementById("edit_modal").showModal()}
      >
        Edit
      </button>

      {/* modal */}
      <dialog id="edit_modal" className="modal">
        <div className="modal-box">
          <div className="navbar mt-8">
            <button
              type="submit"
              className="btn btn-warning btn-outline mr-6"
              onClick={(e) => {
                e.preventDefault();
                addNote();
              }}
            >
              Edit
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
  )
}

export default EditNote
