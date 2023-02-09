import React from 'react'

import { useState } from 'react'

function BookEdit({Passing_Title_AsAProp_WhileEditing, onEdit}) {
    const [title, setTitle] = useState(Passing_Title_AsAProp_WhileEditing.title)
    const handelSave = (event) =>{
        setTitle(event.target.value)
    }

    const handelFormSubmit = (e) =>{
        e.preventDefault()
        onEdit(Passing_Title_AsAProp_WhileEditing.id , title)
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