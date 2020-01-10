import React from "react";
import io from "socket.io-client"; // npm i socket.io-client
import MessageList from "./MessageList";

// const socketURL = 'http://3.120.96.16:3000';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newMessage: "", users: [], color: "black" };

    this.socket = io("http://3.120.96.16:3000");
    this.historyMsg = this.historyMsg.bind(this);
    this.updateNewMsg = this.updateNewMsg.bind(this);
    this.pushNewMsg = this.pushNewMsg.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    this.socket.on("messages", this.historyMsg);
    this.socket.on("new_message", this.pushNewMsg);

  }

  historyMsg(historyData) {
    console.log("historyMsg: ", historyData);
    this.setState({ users: historyData }); // to get the history message
  }

  updateNewMsg(e) {
    this.setState({ newMessage: e.target.value }); // to grab the new message from the input value and update to state
    console.log("updateNewMsg: ", e.target.value);
  }

  pushNewMsg(message) {
    let copyMessage = [...this.state.users];
    copyMessage.splice(0, 1);

    console.log("newMsg: ", message);
    this.setState({ users: [...copyMessage, message] }); // to push new message to history
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
      response => {
        console.log("Emitted", "response:", response);
        this.pushNewMsg(response.data.newMessage);
      }
    ); // callback function to check if its sucessful
    this.setState({ newMessage: "" });
  }

  render() {
    // let words = this.state.newMessage.split(" ");
    // console.log(words);
    // let amountOfWords = words.length;

    // let wordCountColor;
    // if(amountOfWords > 20){
    //   wordCountColor = "red";
    // }
    let characters = this.state.newMessage
      .split(" ")
      .filter(word => word)
      .join("");
    console.log(characters);
    let disabled;
    let warning;
    let numOfCharacters = characters.length;
    if (numOfCharacters > 20) {
      disabled = true;
      warning= <span className="inputWarning">Max 200 characters</span>;
    } else {
      disabled = false;
      warning ="";
    }

    return (
      <div className="Chat">
        <div className="messageCtn">
          <MessageList users={this.state.users} />

          <form
            className="sendCtn"
            onSubmit={this.sendMessage}
            disabled={disabled}
          >
            <input
              type="text"
              className="msgInput"
              onChange={this.updateNewMsg}
              value={this.state.newMessage}
            />

            <button className="msg-Btn" disabled={disabled}>
              Send
            </button>
          </form>
          <p className="wordsCount">{warning} {numOfCharacters} / 20</p>
     
        </div>
      </div>
    );
  }
}

export default Chat;
