import React from 'react'

import { useState } from 'react'
//import BooksContext from '../Context/Books';
import useBookContext from '../CustomHooks/use-Custom-Hooks'

function BookEdit({Passing_Title_AsAProp_WhileEditing, onEdit}) {
    const [title, setTitle] = useState(Passing_Title_AsAProp_WhileEditing.title)
    //const {editBookByIdFromContext}  =  useContext(BooksContext)////instead of"useContext(BooksContext)" use useBookContext() customhook
    const {editBookByIdFromContext} = useBookContext()

    const handelSave = (event) =>{
        setTitle(event.target.value)
    }

    const handelFormSubmit = (e) =>{
        e.preventDefault()
        onEdit()
        editBookByIdFromContext(Passing_Title_AsAProp_WhileEditing.id,title)
    }
  return (
    <div>
        <form onSubmit={handelFormSubmit} className='book-edit'>
        <label>Title</label>
        <input className='input' value={title} onChange={handelSave}/>
        <button className='button is-primary'>Save</button>
        </form>
    </div>
  )
}

export default BookEdit