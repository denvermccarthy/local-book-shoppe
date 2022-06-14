const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released;
  authors;
  constructor({ id, title, released, authors }) {
    this.id = id;
    this.title = title;
    this.released = released;
    if (authors) this.authors = authors;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from books;');
    const books = rows.map((row) => new Book(row));
    return books;
  }
  static async getBookById(id) {
    // TODO: make this a join to show authors
    const { rows } = await pool.query(`SELECT
      books.*, 
        COALESCE(
        json_agg(to_jsonb(authors)) FILTER (WHERE books.id is not null), '[]'
      ) as authors
    FROM books
    LEFT JOIN authors_books on books.id = authors_books.book_id
    LEFT JOIN authors on authors_books.author_id = authors.id
    GROUP BY books.id;`);

    return new Book(rows.find((row) => row.id === id));
  }
};
