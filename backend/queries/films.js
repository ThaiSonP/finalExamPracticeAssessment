const db = require('../seed/index')

const getAllMovies = (req,res)=>{
  db.any(
    'SELECT movies.id ,movies.title, movies.img_url, genres.movie_genre ,  AVG (STARS) '+
      'FROM movies  '+
      'JOIN ratings '+
      'ON ratings.movie_id = movies.id '+
      'JOIN genres '+
      'ON movies.genre_id = genres.id '+
      'GROUP BY movies.id, title, img_url , movie_genre')
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
  db.any("SELECT title,img_url, AVG (STARS)  FROM movies JOIN ratings ON movies.id = ratings.movie_id GROUP BY title ,genre_id, img_url")
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
    'ON movies.genre_id = genres.id '+
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

const getMoviesByGenre = (req,res)=>{
  const id=req.params.id;
  db.any(
    'SELECT movies.title, genres.movie_genre '+
    'FROM movies '+
    'JOIN genres '+
    'ON movies.genre_id = genres.id '+
    'WHERE genres.id = $1 ', id)
    .then(responses=>{
      res.status(200)
      .json({
        message: 'these are all the films for this genre',
        data: responses
      })
    }).catch(err=>{
      console.log(err)
    })
}

const createComment = (req,res)=>{
  const body = req.body
  db.none ('INSERT INTO comments (statement,movie_id) VALUES (${statement},${movie_id})',body)
  .then(results=>{
    res.status(200)
    .json({
      message:'comment created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

const createRating = (req,res)=>{
  const body = req.body
  db.none ('INSERT INTO ratings (stars, movie_id) VALUES(${stars},${movie_id})',body)
  .then(results=>{
    res.status(200)
    .json({
      message:'rating created'
    })
  }).catch(err=>{
    console.log(err)
  })
}

module.exports={
  getAllMovies,
  getMoviesWithRatings,
  getAllInfoById,
  getMoviesByGenre,
  createComment,
  createRating
}
