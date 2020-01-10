import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt} from "@fortawesome/free-solid-svg-icons";

class RenderHeader extends React.Component {
  render() {
    return (
      <header className="chatHeader">
        <h1>ViChat</h1>
        <div className="chatHeaderSmlCtn">
          <p><FontAwesomeIcon icon={faUserAlt} /> Welcome {this.props.username}</p>
          <button className="logout-btn">Log Out</button>
        </div>
      </header>
    );
  }
}

export default RenderHeader;
