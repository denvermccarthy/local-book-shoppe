const pool = require('../utils/pool');

module.exports = class Author {
  id;
  name;
  dob;
  pob;
  constructor({ id, name, dob, pob }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pob = pob;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM authors;');
    return rows.map(({ id, name }) => new Author({ id, name }));
  }
  static async getAuthorById(id) {
    // TODO: make this a join to show authors
    const { rows } = await pool.query('select * from authors where id=$1;', [
      id,
    ]);

    return new Author(rows[0]);
  }
};
