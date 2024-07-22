// import React from "react";
import Link from "next/link";

const NoteCard = ({ id, title, note, tag}) => {
    const truncatedNote = `${note.substring(0, 30)}...`;

  return <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <h6>{tag}</h6>
    <p>{truncatedNote}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-warning btn-outline">View</button> */}
      <Link href={`/view`} className="btn btn-warning btn-outline">
            View
          </Link>
    </div>
  </div>
</div>;
};

export default NoteCard;
