import React, {Component} from 'react';
import './App.scss';
import Header from './Header/Header';
import Feed from './Feed/Feed';
import Profile from './Profile/Profile';
import CreatePost from './CreatePost/CreatePost';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
  render () {
    return (
        <Router>
            <div className="App">
              <Header/>
              <main className="main">
                  <Switch>
                      <Route path="/profile">
                          <Profile />
                      </Route>
                      <Route path="/post/create">
                          <CreatePost />
                      </Route>
                      <Route path="/">
                          <Feed />
                      </Route>
                  </Switch>
              </main>
            </div>
        </Router>
    );
  }
}

export default App;
