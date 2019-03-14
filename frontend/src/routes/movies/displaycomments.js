import React from 'react'

export const DisplayComments = (props)=>{
  if(props.data){
    console.log(props.data)

    const createComments = props.data.map(el=>{
      return (
        <div key={el.id}>
          <p>{el.statement}</p>
        </div>
      )
    })
    return(
      <div>
        {createComments}
      </div>
    )
  }else{
    return(null)
  }

}

export default DisplayComments
