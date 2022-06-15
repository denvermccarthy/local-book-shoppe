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

  test('/books/:id should render a book object with an authors key', async () => {
    const req = await request(app).get('/books/1');
    const bookObject = {
      authors: [
        {
          id: 1,
          name: 'J. K. Rowling',
          dob: '07/31/1965',
          pob: 'Yate, England',
        },
      ],
      ...books[0],
    };
    expect(req.body).toEqual(bookObject);
  });
  it('post to /books should add a new book', async () => {
    const res = await request(app).post('/books').send({
      title: 'The Lightning Thief',
      released: 2005,
    });
    expect(res.status).toBe(200);
    expect(res.body.title).toBe('The Lightning Thief');
    expect(res.body.released).toBe(2005);
  });
  afterAll(() => {
    pool.end();
  });
});
