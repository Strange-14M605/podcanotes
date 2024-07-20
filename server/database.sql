CREATE DATABASE podcanotes;

CREATE TABLE notes(
    note_id SERIAL PRIMARY KEY,
    title TEXT,
    note TEXT,
    tag TEXT,
    url TEXT
);