const pool = require('../utils/pool');

module.exports = class Book {
  id;
  title;
  released;
  constructor({ id, title, released }) {
    this.id = id;
    this.title = title;
    this.released = released;
  }

  static async getAll() {
    const { rows } = await pool.query('select * from books;');
    const books = rows.map((row) => new Book(row));
    return books;
  }
  static async getBookById(id) {
    // TODO: make this a join to show authors
    const { rows } = await pool.query('select * from books where id=$1;', [id]);

    return new Book(rows[0]);
  }
};
