import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../styling/movies.css'

// export const Movies = (props) =>{
class Movies extends Component{
  constructor(props){
    super(props)
      this.state={
        selected:''
      }
  }
  render(){

    const{films}=this.props
    console.log(films)

    const createFilms = films.map(el=>{
      return(
        <div className = "filmBio" key={el.id}>
          <div className = 'moviePoster'>
            <Link to={`/movies/${el.id}`}>
              <img src={`${el.img_url}`} alt = ''/>
            </Link>
          </div>

          <div className = 'moviebio'>
            <Link to={`/movies/${el.id}`}>
              {el.title}
            </Link>

            <p>
              Genre: {`${el.movie_genre}`} <br/>
              Average Rating: {parseInt(`${el.avg}`)}
              </p>
          </div>
        </div>
      )
    })

    return(
      <div className="movies">
        {createFilms}
      </div>
    )}

}

export default Movies
