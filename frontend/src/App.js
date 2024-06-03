// src/App.js
import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const App = () => {
  return (
    <div>
      <BookForm />
      <BookList />
    </div>
  );
};

export default App;
