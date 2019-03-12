import React from 'react'
// import '../../styling/singlemovie.css'

export const Singlemovie = (props)=>{
  console.log(props.match.params)
  return(
    <div>
      This is one movie
    </div>
  )
}
export default Singlemovie
