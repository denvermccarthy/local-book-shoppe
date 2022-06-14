const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const authors = require('../data/authors');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/authors should render an array of book objects', async () => {
    const req = await request(app).get('/authors');
    expect(req.body).toEqual(
      authors.map(({ id, name }) => {
        return { id, name };
      })
    );
  });
  test('/authors/:id should render a book object with an authors key', async () => {
    const req = await request(app).get('/authors/1');
    const bookObject = {
      books: [
        {
          id: '1',
          title: 'Harry Potter and the Philosophers Stone',
          released: 1997,
        },
      ],
      ...authors[0],
    };
    expect(req.body).toEqual(bookObject);
  });

  afterAll(() => {
    pool.end();
  });
});
