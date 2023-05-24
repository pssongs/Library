let myLibrary = []

class Book {
  constructor(title, author, pages = 0, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
}

class Library {
  constructor(){
    this.books = []
  }

  addToLib(newBook){
    this.books.push(newBook)
  }
}

function createBook() {
  title = document.getElementById("title").value
  author = document.getElementById("author").value
  pages = document.getElementById("pages").value
  read = document.getElementById("read").checked
  return new Book(title,author,pages,read)
}

function createListing(newBook) {
  const bookCard = document.createElement("div")
  const title = document.createElement("div")
  const author = document.createElement("div")
  const pages = document.createElement("div")
  const read = document.createElement("button")
  
  bookCard.classList.add('book-card')
  read.classList.add('readBtn')

  title.textContent = `"${newBook.title}"`
  author.textContent = newBook.author
  pages.textContent = newBook.pages
  if (newBook.read == true) {
    read.textContent = "Read"
    read.classList.add("btn-green")
  } else {
    read.textContent = "Not Read"
    read.classList.add("btn-red")
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(read)
  bookListing.appendChild(bookCard)

  bookInfo.classList.remove("active")

  read.addEventListener('click', () => {
    changeColors(read)
  })
}

function changeColors(read) {
  if (read.textContent == "Read") {
    read.classList.remove("btn-green")
    read.classList.add("btn-red")
    read.textContent = "Not Read"
  } else {
    read.classList.remove("btn-red")
    read.classList.add("btn-green")
    read.textContent = "Read"
  }
}

function addBook(e){
  e.preventDefault()
  const newBook = createBook()

  createListing(newBook)
  library.addToLib(newBook)
  addBookForm.reset()
}

const addButton = document.querySelector(".btn-add")
const addBookForm = document.querySelector("#addBookForm")
const bookInfo = document.querySelector('.book-info')
const bookListing = document.querySelector('.listings')
const exit = document.querySelector('#exit')
const library = new Library()
var greenRed = []

addButton.addEventListener('click', () => {
  bookInfo.classList.add('active')
})

exit.addEventListener('click', () => {
  bookInfo.classList.remove('active')
})

bookInfo.onsubmit = addBook
