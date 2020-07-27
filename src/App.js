import React from 'react';
import './App.css';
import Search from './Search/Search.js';
import Filters from './Filters/Filters.js';
import BookList from './BookList/BookList.js';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        books: [],
        printType: "all",
        bookType: "no filter"
    }
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q={search terms}'
  }


  render () {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search books={this.state.books}/>
        <Filters printType={this.state.printType} bookType={this.state.bookType}/>
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
