import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js'

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookTopContent: PropTypes.func,
  }

  static defaultProps = {
    bookTopContent: (book) => {}
  }

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                thumbnail={book.imageLinks.thumbnail}>
                {this.props.bookTopContent(book)}
              </Book>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default BooksGrid;
