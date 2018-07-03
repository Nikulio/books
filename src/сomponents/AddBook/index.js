import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addBook } from "../../actions";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import "./index.css";
import { renderTextField } from "../Inputs";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
  inputWrap: {
    marginBottom: "40px",
  },
});

let AddBookForm = (props) => {
  const { handleSubmit, classes } = props;
  return (
    <form onSubmit={handleSubmit} className="addBook-form">
      <div className="input-wrap">
        <Field name="title" component={renderTextField} label="Book's title" />
      </div>
      <div className="input-wrap">
        <Field
          name="author"
          component={renderTextField}
          label="Book's author"
        />
      </div>
      <div className="input-wrap">
        <Field
          name="descr"
          component={renderTextField}
          label="Book's description"
        />
      </div>
      <div className="button-wrap">
        <Button variant="contained" color="primary" type="submit">Submit</Button>
      </div>
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
    const { classes } = this.props;
    return (
      <div className="addBook-wrap">
        <Typography variant="display2" gutterBottom>
          Add book
        </Typography>
        <AddBookForm classes={classes} onSubmit={this.submit} />
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
export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddBook),
);
