import React from 'react';

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state ={};
    }
    

    render(){
        return(
            <div className="Login">

                <h1>Got a nickname?</h1>
        
                <form className="login-form" onSubmit={this.props.submitUser}>
                <input type="text" placeholder="Rubi0115"  onChange={this.props.updateUserName}></input>
                <button className="login-btn">Log In</button>
                </form>

            </div>

        )
    }
}

export default LogIn;