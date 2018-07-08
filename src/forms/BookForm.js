import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../actions";

import { renderTextField, renderField } from "../сomponents/Inputs";
import { required, maxLength15 } from "../сomponents/Inputs/validation";

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

let Form = (props) => {
  const { handleSubmit, valid } = props;
  return (
    <form onSubmit={handleSubmit} className="addBook-form">
      <div className="input-wrap">
        <Field
          name="title"
          type="text"
          label="Book's title"
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className="input-wrap">
        <Field
          name="author"
          label="Book's author"
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className="input-wrap">
        <Field
          multiline={true}
          name="descr"
          component={renderField}
          validate={[required]}
          label="Book's description"
        />
      </div>
      <div className="button-wrap">
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

class BookForm extends Component {
  submit = (data) => {
    const { addBook } = this.props;
    data.createdAt = Date.now();
    addBook(data);
  };

  render() {
    return <Form onSubmit={this.submit} />;
  }
}

Form = reduxForm({
  form: "addBook",
})(Form);

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { addBook },
  )(BookForm),
);
