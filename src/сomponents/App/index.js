import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../../actions";
import { Link, withRouter } from "react-router-dom";
import NewBook from "../NewBook";


class App extends Component {
  componentWillMount() {
    this.props.fetchBooks();
  }

  deleteHandle = (e, id) => {
    console.log("--- ", arguments);
    e.preventDefault();
    console.log("--- ", id);
  };

  fetchData = () => {
    const { books } = this.props;
    return books.length > 0 ? (
      books.map((elem) => {
        const { _id } = elem;
        return (
          <NewBook book={elem} key={elem._id}/>
        );
      })
    ) : (
      <div>No books, sorry</div>
    );
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/add">Add book</Link>
        </div>
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
  )(App),
);
