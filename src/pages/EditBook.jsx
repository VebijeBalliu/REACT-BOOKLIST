import React from 'react';
import { useParams } from 'react-router-dom';
import BookForm from '../components/BookForm';


const EditBook = ({ books, updateBook }) => {
    const { id } = useParams();
    const book = books.find((book) => book.id === parseInt(id));

    return (
        <div>
            <h2>Edit Book</h2>
            {book ? <BookForm book={book} saveBook={updateBook} /> : <p>Book not found</p>}
        </div>
    );
};

export default EditBook;
