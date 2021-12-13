let books = [];
books = [{id: 1, title: "Node.js",ISBN:"123", author: {authorId: "303", firstname: "Edward", lastname: "James"}},
    {id: 2,title: "Angular",ISBN:"456",author: {authorId: 308,firstname: "John",lastname: "Smith" }},
    {id: 3,title: "React",ISBN:"783",author: {authorId: 311,firstname: "Lucy",lastname: "Jack" }},
    {id: 4,title: "JavaScript",ISBN:"568",author: {authorId: 511,firstname: "Emma",lastname: "Smith" }}
];

module.exports = class Book {

    constructor(id, title, ISBN, author) {
        this.id = id;
        this.title = title;
        this.ISBN = ISBN;
        this.author = author;
    }
    //create
    save() {
        //this.id = Math.random().toString();
        if (book.length >0){
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
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            return books[index];
        } else {
            throw new Error('NOT Found');
        }
    }
    
    // Update
    update() {
        const index = books.findIndex(p => p.id === this.id);
        if (index > -1) {
            books.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }

    }

    //Delete
    static deleteById(bookId) {
        const index = books.findIndex(p => p.id === bookId);
        if (index > -1) {
            books = books.filter(p => p.id !== bookId);
        } else {
            throw new Error('NOT Found');
        }
    }

}
