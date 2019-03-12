import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './routes/home/header.js'
import './styling/App.css';
import axios from 'axios'

import Home from './routes/home/home.js'
import Movies from './routes/movies/movies.js'

class App extends Component {
  state={
    films:[]
  }

  // get all films
  componentDidMount=()=>{
    axios.get('/films')
    .then(response=>{
      this.setState({
        films:response.data.data
      })
    })
  }

  render() {
    const {films}=this.state
    // console.log(this.state)
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path = '/'
              component={Home}/>
            <Route exact path ='/movies'
              render={(props)=><Movies{...props}
              films={films}/>}
              />
          </Switch>
      </div>
    );
  }
}

export default App;
