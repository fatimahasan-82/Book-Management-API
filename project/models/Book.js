// Book model class
class Book {
  constructor(id, title, author, publishedYear = null, genre = null) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
    this.genre = genre;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  update(data) {
    this.title = data.title || this.title;
    this.author = data.author || this.author;
    this.publishedYear = data.publishedYear || this.publishedYear;
    this.genre = data.genre || this.genre;
    this.updatedAt = new Date();
  }
}

module.exports = Book;