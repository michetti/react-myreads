import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };

  render() {
    const { books } = this.props;

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
              books={books.filter(currentlyReading)}
            />
            <Bookshelf
              title="Want to Read"
              books={books.filter(wantToRead)}
            />
            <Bookshelf
              title="Read"
              books={books.filter(read)}
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
