const express = require('express');
const Book = require('../models/bookModel');

const router = express.Router();

// POST /api/books - Create a new book
router.post('/', async (req, res, next) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    next(err);
  }
});

// GET /api/books - Get all books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
