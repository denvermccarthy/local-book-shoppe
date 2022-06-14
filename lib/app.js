const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
const bookController = require('./controllers/books');
app.use('/books', bookController);
const authorController = require('./controllers/authors');
app.use('/authors', authorController);
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
