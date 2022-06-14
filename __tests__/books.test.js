const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const books = require('../data/books');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/books should render an array of book objects', async () => {
    const req = await request(app).get('/books');

    expect(req.body).toEqual(books);
  });
  afterAll(() => {
    pool.end();
  });
});
