-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE if exists authors_books;
DROP TABLE if exists books;
DROP TABLE if exists authors;


CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

INSERT INTO books (title, released) VALUES
('Harry Potter and the Philosophers Stone', 1997),
('The Hobbit', 1937),
('Charlottes Web', 1952),
('Goodnight Moon', 1947),
('The Hitchhikers Guide to the Galaxy', 1979);

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    dob VARCHAR NOT NULL,
    pob VARCHAR NOT NULL
);

INSERT INTO authors (name, dob, pob) VALUES
('J. K. Rowling', '07/31/1965', 'Yate, England'),
('J. R. R. Tolkien', '01/03/1892', 'Bloemfontein, Orange Free State'),
('E. B. White', '07/11/1899', 'Mount Vernon, New York'),
('Margaret Wise Brown', '05/23/1910', 'Brooklyn, New York'),
('Douglas Adams', '03/11/1952', 'Cambridge, UK');

CREATE TABLE authors_books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT,
    book_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO authors_books (book_id, author_id) VALUES
(1,1),
(2,2),
(3,3),
(4,4),
(5,5);
