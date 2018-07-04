import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import { Link, withRouter } from "react-router-dom";
import Book from "../Book";


class Home extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  deleteHandle = (e, id) => {
    e.preventDefault();
  };

  fetchData = () => {
    const { books } = this.props;
    console.log("--- books", typeof books);
    return (typeof books === "object") && books.length > 0 ? (
      books.map((elem) => {
        const { _id } = elem;
        return (
          <Book book={elem} key={_id}/>
        );
      })
    ) : (
      <div>No books, sorry</div>
    );
  };

  render() {
    return (
      <div>
        <div>{this.fetchData()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { books: state.books };
}

export default withRouter(
  connect(
    mapStateToProps,
    { fetchBooks },
  )(Home),
);
