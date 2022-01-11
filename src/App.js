import axios from 'axios';
import React from 'react';
import User from './components/User';

class App extends React.Component {
  state = {
    user: [],
    followers: []
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
    </div>);
  }
}

export default App;