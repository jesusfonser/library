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
let id = 0;
const dialog = document.querySelector("dialog");
const adder = document.getElementById("adder");
const library = [];
let table = document.getElementsByTagName("table")[0];
const buttonAdd = document.getElementById("btn-add");
const buttonCancel = document.getElementById("btn-cancel");
const errorDiv = document.getElementById("error");

function markRead(button){
    let theid = button.getAttribute("id");
    library[parseInt(theid)].isRead = "✓";
    books2Page();
}

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
        addNewBook(titleBook.value, authorBook.value, pagesBook.value, summaryBook.value, readBook.value);
        dialog.close();
    }
    else{
        errorDiv.setAttribute("style", "display: block");
    }
})

buttonCancel.addEventListener("click", () => {
    dialog.close();
})

dialog.addEventListener("close", () =>{
    errorDiv.setAttribute("style", "display: none;");
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
        let createButton = false;
        let nrow = document.createElement("tr");
        for (const key in item){
            let ntd = document.createElement("td");
            ntd.textContent = item[key];

            if(key === "pages" || key === "isRead") ntd.setAttribute("class", "center");

            nrow.appendChild(ntd);
            
            if(item[key] === "✕"){
                createButton = true;
            }
        }
        let specialtd = document.createElement("td");
        specialtd.setAttribute("class", "special");
        
        if (createButton){
            let readButton = document.createElement("button");
            readButton.setAttribute("id", id.toString());
            readButton.setAttribute("onclick", "markRead(this)");
            readButton.textContent = "Read?";
            specialtd.appendChild(readButton);
        }
        
        nrow.appendChild(specialtd);
        nrow.setAttribute("class", "libro");
        table.appendChild(nrow);
        id++;
    })
    id = 0;
}



addNewBook("Lord of the Rings", "J.R.R. Tolkien", 295,"A book about hobbits", "✕");
addNewBook("Lorem Ipsum Book", "Mr. Lorem", 420, "A book about Lorem and Ipsum", "✓");