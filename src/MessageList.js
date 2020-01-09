import React from 'react'

class MessageList extends React.Component {


    render() {
        let users = this.props.users;
        console.log(users);
        let result = users.map((user)=>{
            return(
                
            <div className="eachUserData" key={user.id}>
               <p className="userName">{user.username}</p> 
               <p className="msgContent">{user.content}</p>
            </div>
         
            )
        })

        return (
            <div className="chatCtn">
              {result}
            </div>
        )
    }
}

export default MessageList;
