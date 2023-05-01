/*
let bookTitle = "Atomic Habits"
let bookAthor = "James Clear"
let bookPages = 360
*/

//Factory
function createBoo(title, author, pages) {

  const book = {
    bookTitle: title,
    bookAthor: author,
    bookPages: pages,
    printBook: function () {
      console.log("Printing")
    }
  }
  return book
}

const book1 = createBoo('Atomic', 'James', 360)

console.log(book1)

/*function printBook() {
  console.log("Printing")
}*/


