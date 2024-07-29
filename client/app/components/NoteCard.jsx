import { useRouter } from "next/navigation";

const NoteCard = ({ id, title, note, tag }) => {
  const truncatedNote = `${note.substring(0, 30)}...`;
  const router = useRouter();

  return (
    <div className="card bg-primary shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h6>{tag}</h6>
        <p>{truncatedNote}</p>
        <div className="card-actions justify-end">
          <button
            type="button"
            onClick={() => router.push(`/view/${id}`)}
            className="btn btn-circle btn-ghost underline underline-offset-4"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
