import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import './style/booklist.css';



const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, { id: books.length + 1, ...newBook }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home books={books} deleteBook={deleteBook} />} />
        <Route path="/add" element={<AddBook addBook={addBook} />} />
        <Route path="/edit/:id" element={<EditBook books={books} updateBook={updateBook} />} />
      </Routes>
    </Router>
  );
};

export default App;
