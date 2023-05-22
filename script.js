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

  title.textContent = newBook.title
  author.textContent = newBook.author
  pages.textContent = newBook.pages
  if (newBook.read == true) {
    read.textContent = "Read"
  } else {
    read.textContent = "Not Read"
  }

  bookCard.appendChild(title)
  bookCard.appendChild(author)
  bookCard.appendChild(pages)
  bookCard.appendChild(read)
  bookListing.appendChild(bookCard)

  bookInfo.classList.remove("active")
}

function addBook(e){
  e.preventDefault()
  const newBook = createBook()

  createListing(newBook)
}

const addButton = document.querySelector(".btn-add")
const addBookForm = document.querySelector("#addBookForm")
const bookInfo = document.querySelector('.book-info')
const bookListing = document.querySelector('.listings')


addButton.addEventListener('click', () => {
  bookInfo.classList.add('active')
})

bookInfo.onsubmit = addBook
