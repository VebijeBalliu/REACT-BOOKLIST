import React from 'react';
import BookForm from '../components/BookForm';

const AddBook = ({ addBook }) => {
    return (
        <div>
            <h2 className='text-center'>Add New Book</h2>
            <BookForm saveBook={addBook} />
           
        </div>
    );
};

export default AddBook;
