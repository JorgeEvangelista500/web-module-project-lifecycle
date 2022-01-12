import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
    render(){
        return(
            <>
                {this.props.followers.map(follower => (
                    <Follower key={follower.id} follower={follower}/>
                ))}
            </>
        )
    }
}

export default FollowerList;