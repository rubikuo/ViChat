import React from "react";
import Chat from "./Chat";
import Login from "./Login";

import "./App.css";

class App extends React.Component{
   constructor(props){
     super(props);
     this.state = {logIn: false, 
      currentPage: "chat",
     username: ""};
   
     this.updateUserName = this.updateUserName.bind(this);
     this.submitUser = this.submitUser.bind(this);
   }

   // to update username in the state
   updateUserName(e) {
    this.setState({username: e.target.value})
    console.log(e.target.value);
  }

//
  submitUser(e){
    e.preventDefault();
    console.log(this.state.username) 

   
  }
   

 render(){
   let currentPage;
   let logInPage = <Login updateUserName ={this.updateUserName} submitUser={this.submitUser} />
   let chatPage = <Chat username={this.state.username}/>
   if(this.state.currentPage === "logIn"){
       currentPage = logInPage;
   }else{
     currentPage = chatPage;
   }

  return (
    <div className="App">
    
      <h1 className="header">EC Chat Space</h1>
   
      {currentPage}

    </div>
  );
}
}

export default App;
