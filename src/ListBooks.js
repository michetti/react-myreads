import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  render() {
    // TODO: trying currying, but doens't look very helpful here
    const filter = (shelf, book) => book.shelf && book.shelf === shelf;
    const currentlyReading = filter.bind(null, 'currentlyReading');
    const wantToRead = filter.bind(null, 'wantToRead');
    const read = filter.bind(null, 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              title="Currently Reading"
              books={this.state.books.filter(currentlyReading)}
            />
            <Bookshelf
              title="Want to Read"
              books={this.state.books.filter(wantToRead)}
            />
            <Bookshelf
              title="Read"
              books={this.state.books.filter(read)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
