let myLibrary = []

function Book(title,author,pages,read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBook(){

}

const addButton = document.querySelector(".btn-add")
const addBookForm = document.querySelector("#addBookForm")
const bookInfo = document.querySelector('.book-info')

addButton.addEventListener('click', () => {

  bookInfo.classList.add('active')
  addButton.classList.add('inactive')
})

