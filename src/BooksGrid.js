import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";

class BooksGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookTopContent: PropTypes.func
  };

  static defaultProps = {
    bookTopContent: book => {}
  };

  thumbnail = book => {
    if (book.imageLinks) {
      return book.imageLinks.thumbnail;
    }

    return "http://via.placeholder.com/128x193?text=no+image";
  };

  render() {
    const { books } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => {
          return (
            <li key={book.id}>
              <Book
                title={book.title}
                authors={book.authors}
                thumbnail={this.thumbnail(book)}
              >
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
