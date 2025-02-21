/* Referencia:

function Libro(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}.`);
    }
}

*/

const library = [];

function Book(title, author, pages, isRead, summary){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.summary = summary;
}

function addNewBook(title, author, pages, isRead, summary){
    let book = new Book(title, author, pages, isRead, summary);
    library.push(book);
}

