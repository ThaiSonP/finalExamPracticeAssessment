import React from 'react'
import {Link} from 'react-router-dom'
import "../../styling/header.css"

export const Header = (props)=>{

  return(
    <nav>
      <div className = 'headerContainer'>

        <div className = 'homeDiv'>
          <Link to = '/'>Home</Link>
        </div>
        <div className = 'sortBy'>
          <Link to ='/movies'>All Movies</Link>

          <Link to ='/movies/bygenre'>By Genre</Link>
        </div>
      </div>
    </nav>
  )
}
export default Header
