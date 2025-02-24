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
let table = document.getElementsByTagName("table")[0];

function Book(title, author, pages, summary, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.summary = summary;
    this.isRead = isRead;
}

function addNewBook(title, author, pages, summary, isRead){
    let book = new Book(title, author, pages, summary, isRead);
    library.push(book);
    books2Page();
}

function books2Page(){
    library.forEach(item =>{
        let nrow = document.createElement("tr");
        for (const key in item){
            let ntd = document.createElement("td");
            ntd.textContent = item[key];
            nrow.appendChild(ntd);
        }
        table.appendChild(nrow);
    })
}

addNewBook("Lord of the Rings", "J.R.R. Tolkien", 295,"A book about hobbits", false);
