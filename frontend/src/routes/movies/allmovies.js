import React, {Component} from 'react'
import DisplayMovies from './displaymovies'
import axios from 'axios'
import '../../styling/movieform.css'


class AllMovies extends Component{
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
  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  filterMovies = ()=>{
    const {films,selected}=this.state

    const filteredfilms =(films.filter(el=>{
      return(el.title.toLowerCase().includes(selected.toLowerCase()))
      })
    )
    this.setState({
      films:filteredfilms,
      selected:''
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.filterMovies()
  }

  render(){
    const {films}=this.state
    // console.log(films)

    return(
      <div className = 'moviescontainer'>
        <form onChange = {this.handleChange} onSubmit={this.handleSubmit}>
          <input name = 'selected' type='text' placeholder = 'Search by Movie Name'/>
          <input type='submit'/>
        </form><br/>

        <DisplayMovies films={films}/>
      </div>
    )
  }
}
export default AllMovies
