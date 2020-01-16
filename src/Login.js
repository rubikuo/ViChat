import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class LogIn extends React.Component {
  render() {
    console.log(this.props.username);
    // to control the validation status in UI
    let username = this.props.username;
    let styleColor;
    let styleColor2;

    if (!this.props.regExLogin.test(username) && username.length > 12) {
      styleColor2 = { color: "red" };
      styleColor = { color: "red" };
    } else if (username.length > 12 || username.length === 0) {
      styleColor = { color: "red" };
      styleColor2 = { color: "blue" };
    } else if (!this.props.regExLogin.test(username)) {
      styleColor2 = { color: "red" };
      styleColor = { color: "blue" };
    } else if (username.length < 13) {
      styleColor2 = { color: "blue" };
      styleColor = { color: "blue" };
    }

    return (
      <div className="Login">
        <h1>Choose Username</h1>
        <form className="login-form" onSubmit={this.props.logInUserName}>
          <div className="userNameReg">
            <input
              type="text"
              placeholder="Rubi0115"
              onChange={this.props.updateUserName}
            />

            <div className="logInvalidation">
              <p style={styleColor}>
                <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" />{" "}
                Username must be max 12 characters
              </p>
              <p style={styleColor2}>
                <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" />{" "}
                Only can contain alphabets, numbers(0-9) <br></br> empty spaces,
                underscore(_), hyphen(-)
              </p>
            </div>
          </div>
          <button className="login-btn">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
