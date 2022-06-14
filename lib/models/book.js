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
};
