const router = require('express').Router();
const {


} = require('../../controllers/thoughtController');


// api/thoughts

router.route('/').get(getThoughts).post(createThought);


// api/thoughts/:thoughtsID

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

    module.exports = router;