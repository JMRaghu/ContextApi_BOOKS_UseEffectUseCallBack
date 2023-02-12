import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit' 
//import BooksContext from '../Context/Books';
import useBookContext from '../CustomHooks/use-Custom-Hooks'

function BookShow({ bookfromMap}) {

    const [showEdit, setShowEdit] = useState(false);
    //const {deleteBookByIdFromContext} = useContext(BooksContext)//instead of"useContext(BooksContext)" use useBookContext() customhook
    const {deleteBookByIdFromContext} = useBookContext()

    const handelDeleteClick = () => {
        deleteBookByIdFromContext(bookfromMap.id)
    }
    const handelEditClick = () => {
        setShowEdit(!showEdit);
    };


    //single callback function/single Event Handler there passing down to edit
   const  handelEditSubmit = () =>{
        setShowEdit(false);
    }

    let content = <h3>{bookfromMap.title}</h3>
    if(showEdit){
        content = <BookEdit Passing_Title_AsAProp_WhileEditing = {bookfromMap} onEdit={handelEditSubmit}/>;
    }

    

    return (
        <div className='book-show'>
            <img alt='books' src={`https://picsum.photos/seed/${bookfromMap.id}/300/200`}/>
            <div>{content}</div>
            <div className='actions'>
                <button className='edit' onClick={handelEditClick}>
                    Edit
                </button>
                <button className='delete' onClick={handelDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default BookShow