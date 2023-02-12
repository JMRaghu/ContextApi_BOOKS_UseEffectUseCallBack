import React from 'react';
// import { useContext } from 'react'; -->used custom hooks
import BookShow from './BookShow';
// import BooksContext from '../Context/Books';--->used custom hooks
import useBookContext from '../CustomHooks/use-Custom-Hooks';

//lets meek custom hooks
//create new folder  called hooks and ad use-Context-Hooks as file name
//add the import statement to the file and create function called useBookContext()
//export useBookContext
//in this file remove usecontext and BooksContext import and
//instead of"useContext(BooksContext)" use useBookContext() customhook

function BookList() {
 // const {allBooks} = useContext(BooksContext) ---> used custom hooks
 const {allBooks} = useBookContext()

    const listOfBooks = allBooks.map((book) =>{
return <BookShow key={book.id} bookfromMap = {book} />
    })
  return (
    <div className='book-list'>{listOfBooks}</div>
  )
}

export default BookList