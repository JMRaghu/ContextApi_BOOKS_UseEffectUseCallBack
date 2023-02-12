// import { useContext } from 'react'--->used custom hooks
import React, { useState } from 'react'
import useBookContext from '../CustomHooks/use-Custom-Hooks'
// import BooksContext from '../Context/Books' --->--->used custom hooks

function BookCreate({onCreate}) {
    const[title,setTitle] = useState('')
    //const {createBookFromContext} = useContext(BooksContext) //instead of"useContext(BooksContext)" use useBookContext() customhook
    const {createBookFromContext} = useBookContext()

    const handelChange = (e) =>{
        setTitle(e.target.value)
    }

    const handelSubmit = (e) =>{
        e.preventDefault();
        // onCreate is a callback, handelsubmit form atva button inda trigger adre then we need to pass title to App component
        createBookFromContext(title)
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