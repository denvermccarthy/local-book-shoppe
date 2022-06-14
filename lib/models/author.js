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
    const { rows } = await pool.query('FROM authors SELECT *;');
    return rows.map(({ id, name }) => new Author({ id, name }));
  }
};
