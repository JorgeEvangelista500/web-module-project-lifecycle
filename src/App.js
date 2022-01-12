import axios from 'axios';
import React from 'react';
import FollowerList from './components/FollowerList';
import User from './components/User';

class App extends React.Component {
  state = {
    user: [],
    followers: [],
    current: ''
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/JorgeEvangelista500`)
        .then(resp=> {
          this.setState({
            ...this.state,
            user: resp.data
          })
        })

    axios.get(`https://api.github.com/users/JorgeEvangelista500/followers`)
        .then(resp =>{
          this.setState({
            ...this.state,
            followers: resp.data
          })
        })
  }

  handleChange = (e) => {
    this.setState({
        ...this.state,
        current: e.target.value
    })
  }

  handleSearch = (e) => {
    e.preventDefault();
    const current = this.state.current
    axios.get(`https://api.github.com/users/${current}`)
        .then(resp => {
          this.setState({
              ...this.state,
              user: resp.data,
              current: ''
          })
        })
  }

  
  render() {
    return(<div>
      <h1>GITHUB INFO</h1>
      <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSearch}>Search</button>
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