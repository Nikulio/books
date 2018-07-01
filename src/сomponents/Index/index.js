import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../AddBook";
import EditBook from "../EditBook";

class Index extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/add" component={AddBook} />
          <Route path="/edit/:id" component={EditBook} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps)(Index));
