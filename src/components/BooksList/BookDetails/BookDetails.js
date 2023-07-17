import { useEffect, useState } from "react";

function BookDetails({ bookId }) {
    const[book, setBook] = useState(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
            .then((response) => response.json())
            .then((data) => {
                setBook(data);
            })
            .catch((error) => console.error(error));
    }, [bookId]);

    if (!book) {
        return <div>Loading...</div>;
    }

    return (
        <div className="book">
            <h1>Book Title: {book.volumeInfo.title}</h1>
            <h2>Book Author: {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}</h2>
            <h2>Book Language: {book.volumeInfo.language}</h2>
            <h2>Book Country of Origin: {book.saleInfo.country}</h2>
            {/*<p><strong>Brief Description:</strong> {book.volumeInfo.description}</p>*/}
            {/*<h2>Brief Description:</h2><p>{book.volumeInfo.description}</p>*/}
            {/*<h2>Brief Description:</h2><p>dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}</p>*/}
            <h2>Brief Description:</h2>
            <p dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />

        </div>
    );
}

export default BookDetails;