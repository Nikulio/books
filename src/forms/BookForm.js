import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Field, reduxForm } from "redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBook, editNote } from "../actions";

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
  const { handleSubmit, data } = props;
  let title, author, descr;
  if (data) {
    title = data.title
    author = data.author
    descr = data.descr
  }
  return (
    <form onSubmit={handleSubmit} className="addBook-form">
      <div className="input-wrap">
        <Field
          name="title"
          type="text"
          label={title ? title : "Book's title"}
          component={renderField}
          validate={[required]}
        />
      </div>
      <div className="input-wrap">
        <Field
          name="author"
          label={author ? author : "Book's author"}
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
          label={descr ? descr : "Book's description"}
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
    const { addBook, editNote, dataID } = this.props;
    if (dataID) {
      editNote(dataID, data);
    }
    else {
      data.createdAt = Date.now();
      addBook(data);
    }
  };

  render() {
    const {data} = this.props;
    return <Form onSubmit={this.submit} data={data} />;
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
    { addBook, editNote },
  )(BookForm),
);
