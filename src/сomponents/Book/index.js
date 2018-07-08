import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook, fetchBooks } from "../../actions";

import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./index.css";


const styles = (theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
  },
  link: {
    color: "inherit",
    textDecoration: "none",
  },
});

class Book extends Component {

  delete = (e) => {
    e.preventDefault();
    this.props.deleteBook(e.target.dataset.deleteId);
    this.props.fetchBooks();
  };

  render() {
    const { title, author, descr, _id } = this.props.book;
    const { classes } = this.props;
    return (
      <Paper className={`${classes.root} books__book`} elevation={1}>
        <Typography variant="headline" component="h3" gutterBottom>{title}</Typography>
        <Typography variant="title" component="h5" gutterBottom>
          {author}
        </Typography>
        <Typography component="div" gutterBottom>{descr}</Typography>
        <div>
          <Button variant="contained" color="primary" className={classes.button}>
            <Link className={classes.link} to={`/edit/${_id}`}>
              Edit book
            </Link>
          </Button>
          <Button color="secondary" variant="contained" className={classes.button}>
            <Link
              onClick={this.delete}
              className={classes.link}
              data-delete-id={_id}
              to={`/delete/${_id}`}
            >
              Delete book
            </Link>
          </Button>
        </div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { deleteBook, fetchBooks },
  )(Book),
);
