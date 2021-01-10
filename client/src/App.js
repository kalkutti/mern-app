import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Blog from './Blog';
import axios from 'axios';

class App extends Component {
  state = {
    success: null
  };

  componentDidMount() {
    axios.get('/api/')
    .then(res => this.setState({success: res.data}))
    .catch(err => console.log(err))
  }

  render () {
    return ( 
    <div className="App">
      <header className="App-header">
        <h1>Mern-app</h1>
        <div> 
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
            <Switch>
              <Route exact path="/">
                <h2>Home</h2>
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
            </Switch>
        </div>
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
