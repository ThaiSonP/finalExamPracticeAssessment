import React,{Component} from 'react'
import axios from 'axios'
import '../../styling/singlemovie.css'
import DisplayComments from './displaycomments.js'

class Singlemovie extends Component{
  constructor(props){
    super(props)
    this.state={
      id:+props.match.params.id,
      selectedRating:null,
      comment:'',
    }
  }

  getData=()=>{
    const{id}=this.state

    axios.get(`/films/average/${id}`)
    .then(results=>{
      this.setState({
        average:+results.data.data[0].avg,
        image: results.data.data[0].img_url,
        title:results.data.data[0].title
        })
      })
    axios.get(`/films/info/${id}`)
    .then(results=>{
      this.setState({
        data:results.data.data
      })
    })
  }

  componentDidMount=()=>{
    this.getData()
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitComment = (e)=>{
    const{comment,id}=this.state

    e.preventDefault()

    axios.post('/films/comment',{
      statement:comment,
      movie_id:id
    }).then(response=>{
      console.log(response.data);
      this.getData();
      this.setState({
        comment:null
      });
    }).catch(err=>{
      console.log(err)
    })


  }

  submitRating = (e)=>{
    const{selectedRating,id}=this.state

    e.preventDefault()

    axios.post('/films/rating',{
      stars:+selectedRating,
      movie_id:id
    }).then(response=>{
      console.log(response.data)
      this.getData();
      this.setState({
        selectedRating: null
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  displayComments = ()=>{
    const {data}=this.state
    if(data){
        data.map(el=>{
          return(
            <div key={el}>
              thing
            </div>
          )
        })
    }
  }

  render(){
    const {title,image,average,data}=this.state
    // console.log(this.state)

  return(
    <div className = 'singleContainer'>
      <div className= 'singleMovie'>

        <img src={`${image}`} alt=''/>
        <p>{title}<br/>
          AVERAGE RATING: {average}
        </p>

      </div>

      <div className = 'rating'>
        <form onChange={this.handleChange} onSubmit={this.submitRating}>
          <label >What would you rate this film?</label>
          <br/>
          1<input type = 'radio' name = 'selectedRating' value = {1} />
          2<input type = 'radio' name = 'selectedRating' value = {2} />
          3<input type = 'radio' name = 'selectedRating' value = {3} />
          4<input type = 'radio' name = 'selectedRating' value = {4} />
          5<input type = 'radio' name = 'selectedRating' value = {5} />
          <input type='submit'/>
        </form>
      </div>

      <br/>
      <div className = 'comments'>
        <form form onChange={this.handleChange} onSubmit={this.submitComment}>
          <label >What did you think about the film?</label><br/>
          <input type = 'text' name = 'comment' placeholder='Insert comment'/>
          <input type = 'submit'/>
        </form>
      </div>

        <br/>
      <div className='displayComments'>
        <DisplayComments data={data}/>
      </div>


    </div>
  )}
}
export default Singlemovie
