import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../../actions";

class NewBook extends Component {
  delete = (e) => {
    e.preventDefault();
    this.props.deleteBook(e.target.dataset.deleteId);
  };

  render() {
    const { title, author, descr, _id } = this.props.book;
    return (
      <div>
        <h1>{title}</h1>
        <div>{author}</div>
        <div>{descr}</div>
        <div>
          <Link to={`/edit/${_id}`}>Edit book</Link>
          <Link onClick={this.delete} data-delete-id={_id} to={`/delete/${_id}`}>
            Delete book
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { deleteBook },
)(NewBook);
