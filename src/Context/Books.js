import { createContext, useCallback, useState } from "react"
import axios from 'axios'

const BooksContext = createContext()

function Provider({ children }) {

    const [books, setBooks] = useState([])

    const fetchBookAPI = useCallback(async () => {
        const response = await axios.get('http://localhost:3009/books')
        setBooks(response.data);
    },[])

//    const stableFecthBook =  useCallback(
//       () => {
//         fetchBookAPI
//       },
//       [ ],
//     )
    

    const createBook = async (title) => {
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
    const deleteBookById = async (id) => {
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

    //this function generally we dont see in reall time projects but to make it clear we can use it
    //we can use/pass same name as object like books:books is equal to books but for my understanding given below name
    const valueToShare = {
        allBooks:books,
        createBookFromContext:createBook,
        fetchBookAPIFromContext:fetchBookAPI,
        editBookByIdFromContext: editBookById,
        deleteBookByIdFromContext: deleteBookById,

    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;