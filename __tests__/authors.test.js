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
          id: 1,
          title: 'Harry Potter and the Philosophers Stone',
          released: 1997,
        },
      ],
      ...authors[0],
    };
    expect(req.body).toEqual(bookObject);
  });
  it('post to /authors should add a new author', async () => {
    const res = await request(app).post('/authors').send({
      name: 'Rick Riordan',
      dob: '06/05/1964',
      pob: 'San Antonio, TX',
    });
    expect(res.status).toBe(200);
    expect(res.body.name).toBe('Rick Riordan');
    expect(res.body.dob).toBe('06/05/1964');
    expect(res.body.pob).toBe('San Antonio, TX');
  });

  afterAll(() => {
    pool.end();
  });
});
