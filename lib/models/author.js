const pool = require('../utils/pool');

module.exports = class Author {
  id;
  name;
  dob;
  pob;
  books;
  constructor({ id, name, dob, pob, books }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pob = pob;
    if (books) this.books = books;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM authors;');
    return rows.map(({ id, name }) => new Author({ id, name }));
  }
  static async getAuthorById(id) {
    // TODO: make this a join to show authors
    const { rows } = await pool.query(`SELECT
    authors.*, 
      COALESCE(
      json_agg(to_jsonb(books)) FILTER (WHERE authors.id is not null), '[]'
    ) as books
  FROM authors
  LEFT JOIN authors_books on authors.id = authors_books.author_id
  LEFT JOIN books on authors_books.book_id = books.id
  GROUP BY authors.id;
`);

    return new Author(rows.find((row) => row.id === id));
  }
  static async insert({ name, dob, pob }) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO authors (name, dob, pob) VALUES ($1, $2, $3) RETURNING *;',
        [name, dob, pob]
      );
      console.log(rows);
      return new Author(rows[0]);
    } catch (error) {
      console.error(error.message);
    }
  }
};
