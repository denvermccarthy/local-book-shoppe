-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE if exists books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

INSERT INTO books (title, released) VALUES
('Harry Potter and the Philosophers Stone', 1997),
('The Hobbit', 1937),
('Charlottes Web', 1952),
('Goodnight Moon', 1947),
('The Hitchhikers Guide to the Galaxy', 1979);

