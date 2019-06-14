const express = require('express')
const router = express.Router()
const TicketsController = require('../controllers/tickets')

// Create a route for getting all movies/tickets from the db
// This corresponds to item 1 in the controller
router.get('/', (req, res) => {
    TicketsController.getAll().then(results => res.json(results));
});


// Create a route for creating a movie
// This corresponds to item 2 in the controller
router.post('/', (req, res) => {
    TicketsController.createMovie(req.body)
    .then(movie => res.json(movie));
});


// Create a route for deleting ONE movie by it's name
// This corresponds to item 3 in the controller
router.delete('/', (req, res) => {
    TicketsController.deleteMovie(req.body).then(result => res.json(result));
})

// Create a route for getting ONE movie by it's id
// This corresponds to item 4 in the controller

module.exports = router
