import React from "react";
import Linkify from "react-linkify";
import Emojify from "react-emojione";

class MessageList extends React.Component {
  render() {
    let users = this.props.users;
    console.log(users);
    let result = users.map(user => {
      return (
        <div className="eachUserData" key={user.id}>
          {/* <span className="timeStamp">{this.props.timeConverter(user.timestamp)}</span> */}
          <p className="userName">{user.username}</p>
          <p className="msgContent">
            <Linkify>
              <Emojify>{user.content}</Emojify>
            </Linkify>
          </p>
        </div>
      );
    });

    return <div className="chatCtn">{result}</div>;
  }
}

export default MessageList;
