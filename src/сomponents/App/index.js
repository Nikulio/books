import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "../Home";
import AddBook from "../AddBook";
import Header from "../Header";
import EditBook from "../EditBook";
import socketIOClient from "socket.io-client";

import "./index.css";

class App extends Component {
  state = {
    endpoint: "http://127.0.0.1:5000",
    test: "",
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("test", { red: "hello" });
    socket.on("serverTest", (data) => {
      console.log("--- ", data);
    });
    return (
      <div>
        <Header />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddBook} />
            <Route path="/edit/:id" component={EditBook} />
          </Switch>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
