import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Field, reduxForm } from "redux-form";
import { editNote } from "../../actions";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import BookForm from "../../forms/BookForm";

import { renderTextField } from "../Inputs";
import "./index.css";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "rgba(0, 0, 0, 0.87)",
    textDecoration: "none",
  },
  inputWrap: {
    marginBottom: "40px",
    width: "100%",
  },
  editForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "50%",
  },
});

let EditBookForm = (props) => {
  const { handleSubmit, data } = props;
  return (
    <form onSubmit={handleSubmit} className="editBook-form">
      <div className="input-wrap">
        <Field name="title" component={renderTextField} label={data.title} />
      </div>
      <div className="input-wrap">
        <Field
          name="author"
          component={renderTextField}
          type="text"
          label={data.author}
        />
      </div>
      <div className="input-wrap">
        <Field
          name="descr"
          multiline={true}
          component={renderTextField}
          label={data.descr}
        />
      </div>
      <div className="button-wrap">
        <Button color="primary" type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

EditBookForm = reduxForm({
  form: "editBook",
})(EditBookForm);

class EditBook extends Component {
  state = {
    title: "",
    author: "",
    descr: "",
  };



  componentDidMount() {
    axios
      .get(`/api/edit/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          title: response.data.title,
          author: response.data.author,
          descr: response.data.descr,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const { id } = this.props.match.params;
    return (
      <div className="editBook-wrap">
        <Typography variant="display2" gutterBottom>
          Edit book
        </Typography>
        <BookForm data={this.state} dataID={id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { editNote },
  )(EditBook),
);
