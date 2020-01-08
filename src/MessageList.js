import React from 'react'

class MessageList extends React.Component {
    constructor(props){
        super(props);
        this.state={};
    }



    render() {
        let users = this.props.users;
        console.log(users);
        let result = users.map((user)=>{
            return(
                
            <div key={user.id}>{user.username}</div>
         
            )
        })

        return (
            <div>
              {result}
            </div>
        )
    }
}

export default MessageList;
