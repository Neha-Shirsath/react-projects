import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            count : 0,
            count2 : 1
        };
        
    }

    render(){

        const {name, email} = this.props;

        const {count, count2} = this.state;


        return(
            <div className="user">
                <h3>Members count: {count}, {count2}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count + 1
                    })                
                }}
            >Increase Count</button>
                <h2>Name: {name}</h2>
                <h2>Email : {email}</h2>
        </div>
        )
    }
}

export default UserClass;