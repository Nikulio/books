import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Field, reduxForm } from "redux-form";
import { editNote } from "../../actions";

let EditBookForm = (props) => {
  const { handleSubmit, data } = props;
  console.log("--- ", data);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Book's title</label>
        <Field
          name="title"
          placeholder={data.title}
          component="input"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="descr">Book's description</label>
        <Field
          name="descr"
          placeholder={data.descr}
          component="textarea"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field
          name="author"
          placeholder={data.author}
          component="input"
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
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

  submit = (data) => {
    const { id } = this.props.match.params;
    this.props.editNote(id, data);
  };

  componentDidMount() {
    console.log("--- ", this.props.match.params.id);
    axios
      .get(`http://localhost:5000/edit/${this.props.match.params.id}`)
      .then((response) => {
        console.log("--- ", response.data);
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
    return (
      <div>
        <h1>fasfasd</h1>
        <EditBookForm data={this.state} onSubmit={this.submit} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { editNote },
)(EditBook);
