import React from "react";
import Chat from "./Chat";
import Login from "./Login";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "logIn",
      username: ""
    };
    this.regExLogin = /^[a-zåäöA-ZÅÄÖ\d-_\s]*$/;

    this.updateUserName = this.updateUserName.bind(this);
    this.logInUserName = this.logInUserName.bind(this);
  }

  // to update username in the state
  updateUserName(e) {
    this.setState({ username: e.target.value });
    console.log(e.target.value);
  }

  //
  logInUserName(e) {
    e.preventDefault();
    if (
      !this.regExLogin.test(this.state.username) ||
      this.state.username.length < 1 ||
      this.state.username.length > 12
    )
      return;
    else {
      this.setState({ currentPage: "chat" });
    }
  }

  render() {
    let page;
    let logInPage = (
      <>
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
        <header className="chatHeader">
          <h1>ViChat</h1>
          <p>{this.state.username}</p>
        </header>
        <Chat username={this.state.username} />
      </>
    );

    if (this.state.currentPage === "logIn") {
      page = logInPage;
    } else if (this.state.currentPage === "chat") {
      page = chatPage;
    }

    return <div className="App">{page}</div>;
  }
}

export default App;
