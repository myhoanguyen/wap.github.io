const Book = require('../models/book');

exports.getBooks = (req, res, next) => {
    res.status(200).json(Book.fetchAll());
}

exports.getBookById = (req, res, next) => {
    let book = Book.findById(req.params.id);
    res.status(200).json(book);
}
exports.save = (req, res, next) => {
    const book = req.body;
    const savedBook = new Book(book.title,book.ISBN,book.author).save();
    res.status(201).json(savedBook);
}

exports.update = (req, res, next) => {
    const book = req.body;
    const updatedProd = new Product(req.params.id, book.title, book.ISBN, book.author).update();
    res.status(200).json(updatedProd);
}

exports.deleteById = (req, res, next) => {
    Book.deleteById(req.params.id);
    res.status(200).end();
}
