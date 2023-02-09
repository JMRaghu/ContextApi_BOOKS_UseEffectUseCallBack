import React, { useEffect, useState } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
import axios from 'axios'

function App() {
    const [books, setBooks] = useState([])

    const fetchBookAPI = async() => {
        const response = await axios.get('http://localhost:3009/books')
        setBooks(response.data);
    }


    useEffect(() =>{
        fetchBookAPI()
    },[])
    const createBook = async (title) => {
        //below code used without server setup
        /* //before updating array or object in a STATE SYSTEM think about mutation we cannot directly add anything
        //always use spread operation and check existing array
        const updateBook = [
            ...books,
             {
                 id: Math.round(Math.random() * 9999), 
                 title 
                }
            ] */

        //below code using API call
        const response = await axios.post('http://localhost:3009/books', {
            title
        })
        const updateBook = [
            ...books,
            response.data
        ]

        setBooks(updateBook)
    }



    //remember to remove always we use filter function
    const deleteBookById = async(id) => {
        await axios.delete(`http://localhost:3009/books/${id}`)
        const deletedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(deletedBooks)
    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3009/books/${id}`, {
            title: newTitle
        })
        console.log("data",response)
        const updateBook = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data

                }
            }
            return book;
        })
        setBooks(updateBook);
    }

    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookCreate onCreate={createBook} />
            <BookList booksProp={books} onDeleteBookPropChildToParent={deleteBookById} onEditBookPropChildToParent={editBookById}></BookList>
        </div>
    )
}

export default App