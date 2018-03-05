import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js'

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
  };

  render() {
    const {title, books} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              return (
                <li>
                  <Book
                    title={book.title}
                    authors={book.authors}
                    thumbnail={book.imageLinks.thumbnail}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;