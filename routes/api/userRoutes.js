const router = require('express').Router();
const {
    
} = require('../../controllers/userController');

// api user
router.route('/.get')(getUser).post(createUser);

// api/user/:userId

router.route('/:userId').get(setSingleUser).delete(deleteUser)

//api/user/:userId/assignments 
router.route('/:userId/thoughts').post(addThought);

//api/user/:userId/thoughts/:thoughtsId

router.route('/:userId/thoughts/:thoughtsId').delete(removeThought)

module.exports = router;