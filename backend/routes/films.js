var express = require('express');
var router = express.Router();
const db = require ('../queries/films')


// starting route => http://localhost:3005/films
router.get('/', db.getAllMovies);
router.get('/average/:id',db.getMoviesWithRatings);
router.get('/info/:id',db.getAllInfoById)
router.get('/genre',db.getAllMovies)
router.get('/genre/:id',db.getMoviesByGenre)
router.post('/comment',db.createComment)
router.post('/rating',db.createRating)

module.exports = router;
