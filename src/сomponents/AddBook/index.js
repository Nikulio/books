import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addBook } from "../../actions";


import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import "./index.scss";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <TextField autoComplete={label} label={label} {...input} {...custom} />
    {touched && error && <div className="error">{error}</div>}
  </div>
);


const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing.unit * 4
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
  inputWrap: {
    marginBottom: "40px"
  }
});

let AddBookForm = (props) => {
  const { handleSubmit, classes } = props;
  console.log("--- ", classes);
  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.root}>
        <Field
          name="title"
          component={renderTextField}
          label="Book's title"
        />
      </div>
      <div className={classes.inputWrap}>
        <Field
          name="author"
          component={renderTextField}
          label="Book's author"
        />
      </div>
      <div className={classes.root}>
        <Field
          name="descr"
          component={renderTextField}
          label="Book's description"
        />
      </div>
      <Button type="submit">Submit</Button>
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
    const {classes} = this.props;
    console.log("--- ", classes);
    return (
      <div>
        <AddBookForm classes onSubmit={this.submit} />
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
