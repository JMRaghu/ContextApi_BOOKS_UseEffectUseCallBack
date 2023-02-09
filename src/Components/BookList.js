import React from 'react';
import BookShow from './BookShow';

function BookList({booksProp,onDeleteBookPropChildToParent,onEditBookPropChildToParent}) {
    const listOfBooks = booksProp.map((book) =>{
return <BookShow key={book.id} bookfromMap = {book} onDeleteChildToParent = {onDeleteBookPropChildToParent} onEditChildToParent={onEditBookPropChildToParent}/>
    })
  return (
    <div className='book-list'>{listOfBooks}</div>
  )
}

export default BookList