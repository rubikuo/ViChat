import React from 'react';

class LogIn extends React.Component{


    render(){
        return(
            <div className="Login">

                <h1>Choose Username</h1>
        
                <form className="login-form" onSubmit={this.props.logInUserName}>
                <input type="text" placeholder="Rubi0115"  onChange={this.props.updateUserName} />
                <button className="login-btn">Log In</button>
                </form>

            </div>

        )
    }
}

export default LogIn;