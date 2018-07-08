import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../../actions";
import Typography from "@material-ui/core/Typography";
import BookForm from "../../forms/BookForm";

import "./index.css";

class AddBook extends Component {
  submit = (data) => {
    data.createdAt = Date.now();
    this.props.addBook(data);
  };
  render() {
    return (
      <div className="addBook-wrap">
        <Typography variant="display2" gutterBottom>
          Add book
        </Typography>
        <BookForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addBook,
};
const mapStateToProps = (state) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBook);
