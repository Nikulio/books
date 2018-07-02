import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import App from "../App";
import AddBook from "../AddBook";
import EditBook from "../EditBook";
import socketIOClient from "socket.io-client";

class Index extends Component {
  state = {
    endpoint: "http://127.0.0.1:5000", // this is where we are connecting to with sockets
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("test", { red: "hello" });
    socket.on('serverTest', (data) => {
      console.log("--- ", data);
    });
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
