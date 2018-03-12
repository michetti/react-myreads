import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.refreshBooks();
  }

  refreshBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  onBookUpdated = (book, newShelf) => {
    this.refreshBooks();
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              myBooks={this.state.books}
              onBookUpdated={this.onBookUpdated}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={this.state.books}
              onBookUpdated={this.onBookUpdated}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
