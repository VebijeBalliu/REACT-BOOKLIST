import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookForm = ({ book, saveBook }) => {
    const [title, setTitle] = useState(book?.title || '');
    const [author, setAuthor] = useState(book?.author || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        saveBook({ ...book, title, author });
        navigate('/');
    };

    return (
        <form  className='w-50 m-auto'  onSubmit={handleSubmit}>
            <div>
                <label htmlFor='title'>Titleof Book</label>
                <input className='form-control' type="text" placeholder='Title'  value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Author</label>
                <input  className='form-control' type="text" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)}  />
            </div>
       
            <button className='btn btn-success' type="submit" >Add</button>
        </form>
    );
};

export default BookForm;
