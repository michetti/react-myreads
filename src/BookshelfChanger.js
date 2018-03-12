import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

class BookshelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  static defaultProps = {
    shelf: "none"
  };

  onChange = e => {
    const { book, onChange } = this.props;
    const targetShelf = e.target.value;

    return BooksAPI.update(book, targetShelf).then(result => {
      onChange(book, targetShelf);
    });
  };

  render() {
    const { shelf } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={this.onChange}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
