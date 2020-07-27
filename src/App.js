import React from 'react';
import './App.css';
import Search from './Search/Search.js';
import Filters from './Filters/Filters.js';
import BookList from './BookList/BookList.js';

const API_KEY = `AIzaSyD25U-z08co19g11eoyJUEfvutx75OIWjo`;

class App extends React.Component {
  constructor() {
    super()
    this.state = {
        books: [],
        printType: "all",
        bookType: "null"
    }
  }

  handleSearch = (searchTerm) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        let books = data.totalItems === 0 ? [] : data.items;
        this.setState({
          books: books,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  handleBookTypeFilter = (bookType) => {
    this.setState({
      bookType: bookType
    });
    console.log(this.state.bookType);
  }

  handlePrintTypeFilter = (printType) => {
    this.setState({
      printType: printType
    });
  }

  render () {
    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <Search 
          books={this.state.books}
          onSearch={this.handleSearch}/>
        <Filters 
          printType={this.state.printType} 
          bookType={this.state.bookType}
          onBookTypeFilter={this.handleBookTypeFilter}
          onPrintTypeFilter={this.handlePrintTypeFilter}/>
        <BookList 
          books={this.state.books}/>
      </main>
    );
  }
}

export default App;
