import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

class LogIn extends React.Component{


    render(){
        return(
            <div className="Login">

                <h1>Choose Username</h1>
                <form className="login-form" onSubmit={this.props.logInUserName}>
                <div className="userNameReg">
                <input type="text" placeholder="Rubi0115"  onChange={this.props.updateUserName} /> 
                <FontAwesomeIcon icon={faInfoCircle} className="infoIcon" />
                
                </div>
                <button className="login-btn">Log In</button>
                </form>

            </div>

        )
    }
}

export default LogIn;