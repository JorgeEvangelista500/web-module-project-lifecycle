import axios from 'axios';
import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/JorgeEvangelista500`)
        .then(resp=> {
          this.setState({
            ...this.state,
            user: resp.data
          })
        })
  }

  componentDidMount(){
      axios.get(`https://api.github.com/users/JorgeEvangelista500/followers`)
          .then(resp =>{
            this.setState({
              ...this.state,
              followers: resp.data
            })
          })
  }

  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
          <input/>
          <button>Search</button>
      </form>
      <div>
        <User user={this.state.user}/>
      </div>
      <div>
        <FollowerList followers={this.state.followers}/>
      </div>
    </div>);
  }
}

export default App;