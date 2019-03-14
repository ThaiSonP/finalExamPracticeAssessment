import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './routes/home/header.js'
import './styling/App.css';

import Home from './routes/home/home.js'
import AllMovies from './routes/movies/allmovies.js'
import Singlemovie from './routes/movies/singlemovie.js'
import ByGenre from './routes/movies/bygenre.js'

class App extends Component {


  render() {

    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path = '/'
              component={Home}/>
            <Route exact path ='/movies'
              component={AllMovies}/>
            <Route exact path ='/movies/bygenre'
                component={ByGenre}/>
            <Route path='/movies/:id'
              render={(props)=><Singlemovie{...props} />}/>
          </Switch>
      </div>
    );
  }
}

export default App;
