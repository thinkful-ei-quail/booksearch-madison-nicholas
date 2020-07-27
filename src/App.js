import React from 'react';
import './App.css';
import Search from './Search/Search.js';
import Filters from './Filters/Filters.js';
import BookList from './BookList/BookList.js';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>Google Book Search</h1>
      </header>
      <Search />
      <Filters />
      <BookList />
    </main>
  );
}

export default App;
