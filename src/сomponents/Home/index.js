import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import Book from "../Book";
import "./index.css";


class Home extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  deleteHandle = (e, id) => {
    e.preventDefault();
  };

  fetchData = () => {
    const { books } = this.props;
    return typeof books === "object" && books.length > 0 ? (
      books.sort((a, b) => {
        return a.createdAt < b.createdAt;
      }).map((elem) => {
        const { _id } = elem;
        return <Book book={elem} key={_id}/>;
      })
    ) : (
      <CircularProgress />
    );
  };

  render() {
    return (
      <div>
        <div className="books">{this.fetchData()}</div>
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
