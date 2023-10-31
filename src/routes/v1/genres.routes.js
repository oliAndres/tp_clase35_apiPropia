const router = require('express').Router();
const {index,show} = require('../../controllers/apiMovies.Controller');

/* /api/v1/movies */

router
    .get('/',index)
    .get('/:id',show)
    
    
module.exports = router;