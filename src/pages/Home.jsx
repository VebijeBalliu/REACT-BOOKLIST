import React from 'react';
import BookList from '../components/BookList';

const Home =  ({ books, deleteBook }) => {
    return (



        <div >

            <h1>Welcome</h1>
            <BookList books={books} deleteBook={deleteBook} />
        </div>

    );
};

export default Home;
