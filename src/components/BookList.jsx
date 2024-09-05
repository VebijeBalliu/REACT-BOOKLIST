import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {
    return (
        <div className='book-list-container'>
            <h2 className='text-center'>Book List</h2>
            <ul className='list-group'>
                {books.map((book) => (
                    <li className='list-group-item book-list-item' key={book.id}>
                        <div className='book-details'>
                            <span className='book-title'>{book.title}</span>
                            <span className='book-author'>{book.author}</span>
                        </div>
                        <div className='book-actions'>
                            <Link to={`/edit/${book.id}`} className='btn btn-primary btn-sm mr-2'>Edit</Link>
                            <button type='button' className='btn btn-danger btn-sm' onClick={() => deleteBook(book.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
