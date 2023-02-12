import React,{useContext} from 'react'
import BooksContext from '../Context/Books'


function useBookContext() {
  return  useContext(BooksContext)
}

export default useBookContext