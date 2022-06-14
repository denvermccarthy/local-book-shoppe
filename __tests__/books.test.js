const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/books should render an array of book objects', async () => {
    const req = await request(app).get('/books');

    expect(req.body.length).toEqual(5);
  });
  afterAll(() => {
    pool.end();
  });
});
