const db = require('../seed/index')

const getAllMovies = (req,res)=>{
  db.any('select * from movies')
  .then(response=>{
    res.status(200)
    .json({
      message:'these are all the movies',
      data:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

const getMoviesWithRatings = (req,res)=>{
  db.any("SELECT title, AVG (STARS) FROM movies JOIN ratings ON movies.id = ratings.movie_id GROUP BY title ,genre, img_url")
  .then(results=>{
    res.status(200)
    .json({
      message: 'these are all movies with avg rating',
      data:results
    })
  }).catch(err=>{
    console.log(err)
  })
}


const getAllInfoById = (req,res)=>{
  const id = req.params.id;
  db.any(
    'SELECT '+
      'movies.title, movies.img_url, ' +
      'comments.statement, comments.movie_id, '+
      'ratings.stars, '+
      'genres.movie_genre '+
    'FROM movies '+
    'JOIN comments '+
    'ON comments.movie_id = movies.id '+
    'JOIN ratings '+
    'ON ratings.movie_id = movies.id '+
    'JOIN genres '+
    'ON movies.genre = genres.id '+
    'WHERE movies.id = $1',id)
  .then(response=>{
    res.status(200)
    .json({
      message:"all info for a movie",
      data:response
    })
  }).catch(err=>{
    console.log(err)
  })
}

// const getMoviesByGenre = (req,res)=>{
//   const id=req.params.id;
//   db.any(
//
//   )
// }

module.exports={
  getAllMovies,
  getMoviesWithRatings,
  getAllInfoById
}
