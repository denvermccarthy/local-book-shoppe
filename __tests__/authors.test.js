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
    expect(req.body).toEqual(authors);
  });

  afterAll(() => {
    pool.end();
  });
});
