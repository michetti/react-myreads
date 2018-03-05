import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';

class SearchBooks extends Component {
  state = {
    books: []
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

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onKeyUp={this.search}/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid books={this.state.books} />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
