import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';
import BookshelfChanger from './BookshelfChanger'

class SearchBooks extends Component {
  state = {
    books: [],
  }

  static propTypes = {
    myBooks: PropTypes.array,
  }

  static defaultProps = {
    myBooks: [],
  }

  resetBooks = () => {
    this.setState({ books: [] });
  }

  // TODO: debounce, but reading it might not be so simple in React?
  search = (e) => {
    const query = e.target.value;

    if (query) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.resetBooks();
        } else {
          this.setState({ books });
        }
      });
    } else {
      this.resetBooks();
    }
  }

  // TODO: should this function be here or in a helper lib?
  findBook = (books, bookId) => {
    return books.find((myBook) => {
      return myBook.id === bookId
    });
  }

  // TODO: should this function be here or in a helper lib?
  findBookShelf = (books, bookId) => {
    const book = this.findBook(books, bookId);
    return book ? book.shelf : 'none';
  }

  render() {
    const {myBooks} = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyUp={this.search}/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid
            books={this.state.books}
            bookTopContent={(book) => (
              <BookshelfChanger
                book={book}
                shelf={this.findBookShelf(myBooks, book.id)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
