import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
  }

  static defaultProps = {
    shelf: 'none',
  }

  render() {
    const {book, shelf} = this.props;

    return (
      <div className="book-shelf-changer">
        <select defaultValue={shelf}>
          <option value="none" disabled>Move to...</option>
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
