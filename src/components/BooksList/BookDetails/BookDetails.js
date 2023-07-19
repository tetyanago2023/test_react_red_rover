import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams} from "react-router-dom";
import { getBookById } from "../../../api/booksApi";

function BookDetails() {
    const {bookId} = useParams()
    const[book, setBook] = useState(null);
    const[error, setError] = useState(false);

    useEffect(() => {
        getBookById(bookId)
            .then((response) => {
                setBook(response.data);
                setError(false);
            })
            .catch((error) => {
                console.error(error);
                setError(true);
            });
    }, [bookId]);

    if (!book) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className='container'>Book was not found!</div>
    }

    return (
        <div className="book">
            <h1>Book Title: {book.volumeInfo.title ? book.volumeInfo.title : 'Title is not available'}</h1>
            <h2>Book Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Authors are not available'}</h2>
            <h2>Book Language: {book.volumeInfo.language}</h2>
            <h2>Book Country of Origin: {book.saleInfo.country}</h2>
            <h2>Brief Description:</h2>
            {/*<p dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>*/}
            <div>{book.volumeInfo.description ? parse(book.volumeInfo.description) : 'Description is not available'}</div>
            {book.volumeInfo.imageLinks.thumbnail ?
            book.volumeInfo.imageLinks
                && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            : 'Image is not available'}
        </div>
        // book.volumeInfo ?
        //     <div className="book">
        //         <h1>Book Title: {book.volumeInfo.title}</h1>
        //         <h2>Book Author: {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'No authors'}</h2>
        //         <h2>Book Language: {book.volumeInfo.language}</h2>
        //         <h2>Book Country of Origin: {book.saleInfo.country}</h2>
        //         <h2>Brief Description:</h2>
        //         {/*<p dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>*/}
        //         <div>{book.volumeInfo.description ? parse(book.volumeInfo.description) : 'No description available'}</div>
        //         {book.volumeInfo.imageLinks.thumbnail ?
        //             book.volumeInfo.imageLinks
        //             && <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        //             : 'No image available'}
        //     </div>
        //     : 'some data about the book is unavailable'
    );
}

export default BookDetails;