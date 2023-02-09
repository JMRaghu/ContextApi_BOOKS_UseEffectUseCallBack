import React from 'react'
import { useState } from 'react'

function BookCreate({onCreate}) {
    const[title,setTitle] = useState('')

    const handelChange = (e) =>{
        setTitle(e.target.value)
    }

    const handelSubmit = (e) =>{
        e.preventDefault();
        // onCreate is a callback, handelsubmit form atva button inda trigger adre then we need to pass title to App component
        onCreate(title)
        //to clear the input once submit form
        setTitle('')

    }
  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={handelSubmit}>
            <label>Title</label>
        <input className="input" type="text" value={title} onChange={handelChange}></input>
        <button className='button'>Submit</button>
        </form>
    </div>
  )
}

export default BookCreate