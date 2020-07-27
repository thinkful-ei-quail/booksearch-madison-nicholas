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
        bookType: "no filter"
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
        this.setState({
          books: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
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
        <Filters printType={this.state.printType} bookType={this.state.bookType}/>
        <BookList books={this.state.books}/>
      </main>
    );
  }
}

export default App;
