import React from "react";
import io from "socket.io-client"; // npm i socket.io-client
import MessageList from "./MessageList";

// const socketURL = 'http://3.120.96.16:3000';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newMessage: "", users: [], count: 0, color: "black" };
    this.socket = io("http://3.120.96.16:3000");
    this.historyMsg = this.historyMsg.bind(this);
    this.updateNewMsg = this.updateNewMsg.bind(this);
    this.newMsg = this.newMsg.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.socket.on("connect", function() {
      console.log("connect");
    }); // "on" is like "addEventlistener". we define when connect, which function should run
    // to get everything everyone has written before
    // message will only happen once to get all the messages that has been written before in an array
    this.socket.on("messages", this.historyMsg);
    // new message can happen anytime and can also never happen and if it happens it will update to the message
    // we just need to listen to this new_message
    this.socket.on("new_message", this.newMsg);

    // "message" and "new_message" are defined on the server (so we must follow how server build)
  }

  historyMsg(data) {
    console.log("historyMsg: ", data);
    this.setState({ users: data }); // to get the history message
  }

  updateNewMsg(e) {
    this.setState({ newMessage: e.target.value, // to grab the new message from the input value
    count: e.target.value.length });
    console.log("updateNewMsg: ", e.target.value);
  }

  newMsg(message) {
    console.log("newMsg: ", message);
    this.setState({ users: [...this.state.users, message]}); 
  }

  sendMessage(e) {
    e.preventDefault();
    console.log("newMsg:", this.state.newMessage);
    this.socket.emit(
      "message",
      {
        username: this.props.username,
        content: this.state.newMessage
      },
      (response) => {
        console.log("Emitted", "response:", response);
        this.newMsg(response.data.newMessage)
      }
    ); // callback function to check if its sucessful
    this.setState({newMessage:""});
  }

  render() {
    
    let users = this.state.users;
    console.log(users);
    let wordCountColor;

    if (this.state.count > 20) {
      wordCountColor = "red";
    } else {
      wordCountColor = "black";
    }

    return (
      <div className="Chat">
        <button className="logout-btn">Log Out</button>
        <div className="messageCtn">
          <MessageList users={this.state.users} />

          <form className="sendCtn" onSubmit={this.sendMessage}>
            <input className="msgInput" onChange={this.updateNewMsg} value={this.setState.newMessage}/>
              <span className="wordsCount" style={{ color: wordCountColor }}>
                {this.state.count} / 20
              </span>
              
            <button className="msg-Btn">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
