import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Movies from './movies'
import axios from 'axios'
// import '../../styling/moviescomponent'


class MovieForm extends Component{
  constructor(props){
    super(props)
    this.state={
      selected:'',
      films:[]
    }
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

  render(){
    const {films}=this.state
    // console.log(this.state)
    return(
      <div>
        This is where the form will be
        <Movies films={films}/>
      </div>
    )
  }
}
export default MovieForm
