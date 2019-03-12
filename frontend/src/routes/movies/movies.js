import React from 'react'
import {Link} from 'react-router-dom'
import '../../styling/movies.css'

export const Movies = (props) =>{

  if(props){
    console.log(props.films)

    const createFilms = props.films.map(el=>{
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
    )
  }
}

export default Movies
