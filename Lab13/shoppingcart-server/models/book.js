let books = [];
books = [{id: 1, title: "Node.js",isbn:"123",publishedDate:"12/12/2012", author:"Kim Lee" },
    {id: 2,title: "Angular",isbn:"456",publishedDate:"12/12/2012", author:"Kim Lee"},
    {id: 3,title: "React",isbn:"783",publishedDate:"12/12/2012", author:"Kim Lee"},
    {id: 4,title: "JavaScript",isbn:"568",publishedDate:"12/12/2012", author:"Kim Lee"}
];

module.exports = class Book {

    constructor(id, title, isbn,publishedDate, author) {
        this.id = id;
        this.title = title;
        this.isbn = isbn;
        this.publishedDate=publishedDate, 
            this.author = author;
    }
    //create
    save() {
        //this.id = Math.random().toString();
        if (books.length >0){
            this.id = books[length -1].id +1;
        }
        else this.id = 1;
        books.push(this);
        return this;
    }
    // Read ALl
    static fetchAll() {
        return books;
    }
    // Read by bookId
    static findById(bookId) {
        const index = books.findIndex(p => p.id == bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }
    
    // Update
    update() {
        const index = books.findIndex(p => p.id == this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    //Delete
    static deleteById(bookId) {
        const index = books.findIndex(p => p.id == bookId);
        if (index > -1) {
            books = books.filter(p => p.id != bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}
