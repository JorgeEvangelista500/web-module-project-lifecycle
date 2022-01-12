import React from "react";
import { render } from "react-dom";

class User extends React.Component {
    render() {   
    return(
    <div className="user" >
        <img width="200" src={this.props.user.avatar_url} alt="avatar"/>
        <div>
           <h2> {this.props.user.name}</h2>
            <p> {this.props.user.company}</p>
            <p> Total Repos:{this.props.user.public_repos}</p>
            <p> Total followers:{this.props.user.followers}</p>
        </div>
    </div>)
    }
}
    export default User;