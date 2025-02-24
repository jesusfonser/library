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
const dialog = document.querySelector("dialog");
const adder = document.getElementById("adder");
const library = [];
let table = document.getElementsByTagName("table")[0];
const buttonAdd = document.getElementById("btn-add");
const errorDiv = document.getElementById("error");
adder.addEventListener("click", () => {
    dialog.showModal()
});

buttonAdd.addEventListener("click", () => {
    let enviar = true;
    
    let titleBook = document.querySelector("input#titulo");
    let pagesBook = document.querySelector("input#pags");
    let authorBook = document.querySelector("input#autor");
    let summaryBook = document.querySelector("textarea");
    let readBook = document.querySelector("input[type='radio']:checked");

    if (readBook){
        let arrayDialog = [titleBook.value, pagesBook.value, authorBook.value, summaryBook.value, readBook.value];
        arrayDialog.forEach(item => {
            if (!item){
                enviar = false;
                return;
            }
        })
    }
    else{
        enviar = false;
    }

    if (enviar){
        addNewBook(titleBook.value, pagesBook.value, authorBook.value, summaryBook.value, readBook.value);
    }
    else{
        errorDiv.setAttribute("style", "display: block");
    }
})

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
    let entradas = Array.from(document.getElementsByClassName("libro"));
    for (let entrada of entradas){
        entrada.remove();
    }

    library.forEach(item =>{
        let nrow = document.createElement("tr");
        for (const key in item){
            let ntd = document.createElement("td");
            ntd.textContent = item[key];
            nrow.appendChild(ntd);
        }
        nrow.setAttribute("class", "libro");
        table.appendChild(nrow);
    })
}



addNewBook("Lord of the Rings", "J.R.R. Tolkien", 295,"A book about hobbits", "✕");
addNewBook("Jarry el petas", "Mi prima", 69, "Un libro sobre tu prima", "✓");
addNewBook("Jarry el petas", "Mi prima", 69, "Un libro sobre tu prima", "✓");
addNewBook("Jarry el petas", "Mi prima", 69, "Un libro sobre tu prima", "✓");
addNewBook("Jarry el petas", "Mi prima", 69, "Un libro sobre tu prima", "✓");
addNewBook("Jarry el petas", "Mi prima", 69, "Un libro sobre tu prima", "✓");