import React, {Component} from 'react'
import DisplayMovies from './displaymovies'
import axios from 'axios'

class ByGenre extends Component{
  state={
    films:[],
    genre:null,
  }

  handleChange = (e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })
    console.log(this.state)
  }

  handleSubmit= (e)=>{
    const{genre}=this.state;
    e.preventDefault();

    axios.get(`/films/genre/${genre}`)
    .then(result=>{
      this.setState({
        films:result.data.data})
    })

  }

  componentDidMount=()=>{
    axios.get(`/films`)
    .then(response=>{
      this.setState({
        films:response.data.data
      })
    })
  }



  render(){
    const{films}=this.state

    // console.log(this.state)

    return(
      <>
        <form onChange={this.handleChange} name='genre' onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange} name='genre' onSubmit={this.handleSubmit}>
            <option value={'/'}>Choose a genre</option>
            <option value={1}>drama</option>
            <option value={2}>crime</option>
            <option value={3}>adventure</option>
            <option value={4}>western</option>
            <option value={5}>thriller</option>
          </select>
          <input type='submit'/>
        </form>

        <DisplayMovies films={films}/>
      </>
    )
  }
}
export default ByGenre
