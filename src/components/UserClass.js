import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
        
    }

    render(){
        const {name, email} = this.props;
        return(
            <div className="user">
            <h2>Name: {name}</h2>
            <h3>Email : {email}</h3>
        </div>
        )
    }
}

export default UserClass;