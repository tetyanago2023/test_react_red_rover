import { useState, useEffect } from "react";
import { getBooksBySearchTerm } from "../../api/booksApi";

function BooksList({search, onSelectBook}) {
    const[books, setBooks] = useState([]);

    useEffect(() => {
      if (search) {
          getBooksBySearchTerm(search)
              .then((response) => {
                  if (response.data.items) {
                      setBooks(response.data.items);
                  } else {
                      setBooks([]);
                  }
              })
              .catch((error) => console.error(error));
      }
    },[search]);
    return (
        <div className='books'>
            <h1>Books</h1>

            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        <a title={book.volumeInfo.title} href='#' onClick={() => onSelectBook(book.id)}>
                            {book.volumeInfo.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BooksList;