import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addBook } from "../../actions";

import "./index.scss";

let AddBookForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Book's title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="descr">Book's description</label>
        <Field name="descr" component="textarea" type="text" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field name="author" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

AddBookForm = reduxForm({
  form: "addBook",
})(AddBookForm);

class AddBook extends Component {
  submit = (data) => {
    this.props.addBook(data);
  };

  render() {
    return (
      <div>
        <AddBookForm onSubmit={this.submit} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addBook,
};
const mapStateToProps = (state) => {
  return {
    init: state.init,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddBook);
