import React from 'react';
import io from 'socket.io-client'; // npm i socket.io-client
import MessageList from './MessageList';


// const socketURL = 'http://3.120.96.16:3000';


class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state ={newMessage:"", users: []};

    }
    
    componentDidMount(){
        const socket = io('http://3.120.96.16:3000'); 
        socket.on('connect', function(){console.log("connect")}); // on is like "addEventlistener". we define when connect, which function should run
        // to get everything everyone has written before
        // message will only happen once to get all the messages has been written before in an array
        socket.on('messages', data => {
            console.log("messages", data)
            this.setState({users:data});
            
        });
        // new message can happen anytime and can also never happen and if it happens it will update to the message
        // we just need to listen to this new_message 
        socket.on('new_message', message => {
            console.log("new_message", message)
        });
        
        // message is defined on the server (so we must follow how server build)
        // socket.emit("message", {
        //     username: "Rubi",
        //     content: "Ni Hao"
        // }, (repsonse)=>{
        //     console.log("Emitted", repsonse)
        // }); // callback function to check if its sucessful
        
    }



    render(){
        let users = this.state.users;
        console.log(users);

        return(
            <div className="Chat">
              <button className="logout-btn">Log Out</button>
              <div className="messageCtn">
               
                     <MessageList users ={this.state.users}/>
                
                  <div className="sendCtn">
                  <input className="msgInput"></input>
                  <button className="msg-Btn">Send</button>
              </div>

              </div>
            


            </div>
        )
    }




}

export default Chat;