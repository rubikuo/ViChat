import React from "react";
// import Linkify from "react-linkify";
import Emojify from "react-emojione";

class MessageList extends React.Component {
    
  render() {
   


    let users = this.props.users;
    console.log(users);

    function isLink(string) {
      let urlRegex = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,}/;
      return urlRegex.test(string);
    }

    let result = users.map(user => {
      let convertedContent = user.content.split(" ").map(word => {
        if (isLink(word)) {
          //console.log(word)
          return (
            <a key={word} href={word}>
              {word}
            </a>
          );
        }
        return " " + word + " ";
      });

      return (
        <div className="eachUserData" key={user.id}>
<span className="timeStamp">{this.props.timeConverter(user.timestamp)}</span>
      <p className="userName">{user.username}</p>
          <p className="msgContent">
            <Emojify>{convertedContent}</Emojify>
          </p>
        </div>
      );
    });

    return <div className="chatCtn">{result}</div>;
  }
}

export default MessageList;
