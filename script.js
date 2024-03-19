let myLibrary = [];
const theBooks = document.getElementById("library");
const button = document.querySelector('.add');
const tileContainer = document.querySelector('.rightGrid');

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

function Book(title, author, pages, haveRead){
    this.title = title + ', ';
    this.author = 'by ' + author;
    this.pages = pages + ' pages long.'
    this.haveRead = haveRead;
}

function clearValues(){
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
}


function addBook(){
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    let haveRead = readInput.value;
    if (haveRead === 'No' || haveRead === 'no' || haveRead === 'N' || haveRead === 'n') {
        haveRead = 'Unread';
        } else {
        haveRead = 'Read' + ' ' + "&#x2713";
    };

    const book = new Book(title, author, pages, haveRead);
    myLibrary.unshift(book);
    let newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.innerHTML = myLibrary[0].title + myLibrary[0].author + '</br>' + myLibrary[0].pages;
    tileContainer.appendChild(newTile);

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer')
    newTile.appendChild(buttonContainer);

    let toggleRead = document.createElement('div'); 
    toggleRead.classList.add('toggle');
    toggleRead.innerHTML = myLibrary[0].haveRead;
    buttonContainer.appendChild(toggleRead);

    let del = document.createElement('span');
    del.classList.add('delete');
    del.innerHTML = "\u00d7";
    buttonContainer.appendChild(del);

    toggleRead.addEventListener('click', (e) => {
        if (e.target.innerHTML.startsWith('R') === true){
            toggleRead.innerHTML = 'Unread';
        } else if (e.target.innerHTML == 'Unread'){
            toggleRead.innerHTML = 'Read' + ' ' + "&#x2713"; 
        }
    });

    clearValues();
    titleInput.focus();
    // saveData();
};

readInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        button.click();
    }
});

tileContainer.addEventListener('click', function(e) {
    if(e.target.className === "delete"){
        e.target.parentElement.parentElement.remove();
    }
});

// function saveData(){
//     localStorage.setItem("data", tileContainer);
//     saveData();
// }
// function showTask(){
//     tileContainer.innerHTML = localStorage.getItem("data");
//     saveData();
// }
// showTask();