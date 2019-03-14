import React from 'react'
import {Link} from 'react-router-dom'
import '../../styling/movies.css'

export const DisplayMovies = (props) =>{

  if(props){
    // console.log(props.films)

    const createFilms = props.films.map(el=>{
      return(
        <div className = "filmDiv" key={el.title}>

            <Link to={`/movies/${el.id}`}>
              <img src={`${el.img_url}`} alt = ''/>
            </Link>



            <Link to={`/movies/${el.id}`}>
              {el.title}
            </Link>

          <br/>
            <p>
              Genre: {`${el.movie_genre}`} <br/>
              Average Rating: {parseInt(`${el.avg}`)}
            </p>

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

export default DisplayMovies
