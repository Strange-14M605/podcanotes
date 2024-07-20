import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();
const port = 5000;

pool.connect();

//middleware
app.use(express.json());
app.use(cors());

//Routes
//add new note
app.post("/note", async (req, res) => {
  try {
    const { title, note, tag, url } = req.body;
    const addNote = await pool.query(
      "INSERT INTO notes (title, note, tag, url) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, note, tag, url]
    );
    // console.log(addNote.rows);
    res.json(addNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all notes
app.get("/note", async (req, res) => {
  try {
    const getAllNotes = await pool.query("SELECT * FROM notes");
    // console.log(getAllNotes.rows);
    res.json(getAllNotes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//filter and get notes
app.get("/note/filter/:tag", async (req, res) => {
  try {
    const { tag } = req.params;
    const filterNotes = await pool.query("SELECT * FROM notes WHERE tag=$1", [
      tag,
    ]);
    console.log(filterNotes.rows);
    res.json(filterNotes.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//get one note
app.get("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneNote = await pool.query(
      "SELECT * FROM notes WHERE note_id = $1",
      [id]
    );
    // console.log(getOneNote.rows);
    res.json(getOneNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//update note
app.put("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, note, tag, url } = req.body;
    const updateNote = await pool.query(
      "UPDATE notes SET title=$1, note=$2, tag=$3, url=$4 WHERE note_id=$5 RETURNING *",
      [title, note, tag, url, id]
    );
    // console.log(updateNote.rows);
    res.json(updateNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//delete note
app.delete("/note/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await pool.query(
      "DELETE FROM notes WHERE note_id=$1 RETURNING *",
      [id]
    );
    res.json(deleteNote.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
