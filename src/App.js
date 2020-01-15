import React from "react";
import Chat from "./Chat";
import Login from "./Login";
import RenderHeader from "./RenderHeader";
import {Helmet} from "react-helmet";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "logIn",
      username: ""
    };
    this.regExLogin = /^[a-zåäöA-ZÅÄÖ0-9-_\s]{1,12}$/;
    this.updateUserName = this.updateUserName.bind(this);
    this.logInUserName = this.logInUserName.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  // to update username in the state
  updateUserName(e) {
    this.setState({ username: e.target.value });
    console.log(e.target.value);
  }

  logInUserName(e) {
    let logInName = this.state.username;
    e.preventDefault();

    if (!this.regExLogin.test(logInName)) return;
    else {
      this.setState({ currentPage: "chat" });
    }
  }

  logOut(e) {
    this.setState({ currentPage: "logIn", username: "" });
  }

  render() {
    let page;
    let logInPage = (
      <>
        <Helmet><title>ViChat:Log-In</title></Helmet>
        <header className="logInHeader">
          <h1>ViChat</h1>
        </header>
        <Login
          updateUserName={this.updateUserName}
          logInUserName={this.logInUserName}
        />
      </>
    );

    let chatPage = (
      <>
       <Helmet><title>ViChat</title></Helmet>
        <RenderHeader username={this.state.username} logOut={this.logOut} />
        <Chat username={this.state.username} />
      </>
    );

    if (this.state.currentPage === "logIn") {
      page = logInPage;
    } else if (this.state.currentPage === "chat") {
      page = chatPage;
    }

    return <div className="App">{page} </div>;
  }
}

export default App;
