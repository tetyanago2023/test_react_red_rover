import { useState, useEffect } from "react";

function BooksList({search, onSelectBook}) {
    const[books, setBooks] = useState([]);

    useEffect(() => {
      if (search) {
          fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
              .then((response) => response.json())
              .then((data) => {
                  if (data.items) {
                      setBooks(data.items);
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