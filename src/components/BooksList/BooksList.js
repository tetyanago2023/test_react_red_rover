import { useEffect, useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getBooksBySearchTerm } from "../../api/booksApi";
import {SearchContext} from "../../context";
import FilterBar from "../FilterBar/FilterBar";

function BooksList() {
    const { search, filters } = useContext(SearchContext);
    const[books, setBooks] = useState([]);
    const[currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 10;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
      if (search) {
          getBooksBySearchTerm(search, currentPage, booksPerPage, filters)
              .then((response) => {
                  if (response.data.items) {
                      setBooks(response.data.items);
                  } else {
                      setBooks([]);
                  }
              })
              .catch((error) => console.error(error));
      }
    },[search, currentPage, filters]);

    const memoizedBooks = useMemo(
        () =>
        books.map((book, index) => (
            <li key={index}>
                <Link to={`/book/${book.id}`} title={book.volumeInfo.title}>
                    {book.volumeInfo.title}
                </Link>
            </li>
        )), [books],
    )

    return (
        <div className="books">
            <div className="container">
                {search && books.length > 0 && <h1>Books</h1>}
                {search && <FilterBar />}

                <ul>
                    {memoizedBooks}
                </ul>

                {search && books.length > 0 && (
                    <>
                        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            Previous
                        </button>
                        Page: {currentPage}
                        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default BooksList;