import React from "react";
import Linkify from "react-linkify";
import Emojify from "react-emojione";

class MessageList extends React.Component {
  render() {
    let users = this.props.users; // this is the result from server
    console.log(users);

    let result = users.map(user => {
      if (user.username === this.props.username) {
        return (
          <div className="chatbubble-right" key={user.id}>
            <div className="userDiv-right">
              <p className="userName-right">{user.username}</p>
              <div className="myData-right">
                <div className="timeStamp-right">
                  {this.props.timeConverter(user.timestamp)}
                </div>
                <p className="msgContent-right">
                  <Linkify>
                    <Emojify>{user.content}</Emojify>
                  </Linkify>
                </p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="chatbubble-left" key={user.id}>
          <div className="userDiv-left">
            <p className="userName-left">{user.username}</p>
            <div className="myData-left">
              <div className="timeStamp-left">
                {this.props.timeConverter(user.timestamp)}
              </div>
              <p className="msgContent-left">
                <Linkify>
                  <Emojify>{user.content}</Emojify>
                </Linkify>
              </p>
            </div>
          </div>
        </div>
        );
      }
    });

    return (
      <div className="chatCtn" ref={this.props.ctnRef}>
        {result}
      </div>
    );
  }
}

export default MessageList;
