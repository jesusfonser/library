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

function Book(title, author, pages, isRead, summary){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.summary = summary;
}