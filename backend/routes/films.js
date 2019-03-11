var express = require('express');
var router = express.Router();
const db = require ('../queries/films')


// http://localhost:3005/films
router.get('/', db.getAllMovies);
router.get('/average',db.getMoviesWithRatings);
router.get('/info/:id',db.getAllInfoById)
router.get('/genre/:id',db.getMoviesByGenre)

module.exports = router;
