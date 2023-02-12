import React, { useEffect } from 'react'
import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'
// import BooksContext from './Context/Books'
import useBookContext from '../src/CustomHooks/use-Custom-Hooks'

function App() {

    //const {fetchBookAPIFromContext} = useContext(BooksContext)//instead of"useContext(BooksContext)" use useBookContext() customhook
    const { fetchBookAPIFromContext } = useBookContext()

    useEffect(() => {
        fetchBookAPIFromContext()
    }, [fetchBookAPIFromContext])



    return (
        <div className='app'>
            <h1>Reading List</h1>
            <BookCreate />
            <BookList ></BookList>
        </div>
    )
}

export default App