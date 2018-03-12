import React, { Component } from "react";
import PropTypes from "prop-types";
import BooksGrid from "./BooksGrid";
import BookshelfChanger from "./BookshelfChanger";

class Bookshelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onBookUpdated: PropTypes.func
  };

  static defaultProps = {
    onBookUpdated: book => {}
  };

  render() {
    const { title, books, onBookUpdated } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={books}
            bookTopContent={book => (
              <BookshelfChanger
                book={book}
                shelf={book.shelf}
                onChange={onBookUpdated}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
