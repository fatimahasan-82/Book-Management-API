const Book = require('../models/Book');

// In-memory books array
let books = [
  new Book(1, 'To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction'),
  new Book(2, '1984', 'George Orwell', 1949, 'Dystopian'),
  new Book(3, 'The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic')
];

// Current ID counter for adding new books
let currentId = books.length;

// Get all books
const getAllBooks = () => {
  return books;
};

// Get book by ID
const getBookById = (id) => {
  return books.find(book => book.id === id);
};

// Add a new book
const addBook = (bookData) => {
  const newId = ++currentId;
  const newBook = new Book(
    newId,
    bookData.title,
    bookData.author,
    bookData.publishedYear,
    bookData.genre
  );
  books.push(newBook);
  return newBook;
};

// Update a book
const updateBook = (id, bookData) => {
  const book = getBookById(id);
  if (book) {
    book.update(bookData);
    return book;
  }
  return null;
};

// Delete a book
const deleteBook = (id) => {
  const initialLength = books.length;
  books = books.filter(book => book.id !== id);
  return initialLength !== books.length;
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};