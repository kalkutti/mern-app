import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    success: null
  }

  componentDidMount() {
    axios.get('/api')
    .then(res => this.setState({success: res.data}))
    .catch(err => console.log(err))
  }

  render () {
    return ( 
    <div className="App">
      <header className="App-header">
        <h1>Mern-app</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>The API call is...</h1>
        <div>
          {this.state.success ? <p>{this.state.success}</p> : null}
        </div> 
      </header>
    </div>
  );
  }
}

export default App;
