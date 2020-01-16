import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
// import io from "socket.io-client";

class RenderHeader extends React.Component {
  render() {
    return (
      <header className="chatHeader">
        <h1>ViChat</h1>
        <div className="chatHeaderSmlCtn">
          <p>
            <FontAwesomeIcon icon={faUserAlt} /> {this.props.username}
          </p>
          <button className="logout-btn" onClick={this.props.logOut}>
            Log Out
          </button>
        </div>
      </header>
    );
  }
}

export default RenderHeader;
