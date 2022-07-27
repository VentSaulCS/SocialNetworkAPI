const { ObjectId } = require('mongoose').Types;
const { User, thought } = require('../models');



module.exports = {
  // Get all Users
  getUsers(req, res) {
    User.find().populate('thoughts').populate('user')
      .then(async (Users) => {
     
        return res.json(Usersj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single User
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.UserId })
      .select('-__v')
      .then(async (User) =>
        !User
          ? res.status(404).json({ message: 'No User with that ID' })
          : res.json({
              User,
              grade: await grade(req.params.UserId),
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new User
  createUser(req, res) {
    User.create(req.body)
      .then((User) => res.json(User))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a User and remove them from the thought
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.UserId })
      .then((User) =>
        !User
          ? res.status(404).json({ message: 'No such User exists' })
          : thought.findOneAndUpdate(
              { Users: req.params.UserId },
              { $pull: { Users: req.params.UserId } },
              { new: true }
            )
      )
      .then((thought) =>
        !thought
          ? res.status(404).json({
              message: 'User deleted, but no thoughts found',
            })
          : res.json({ message: 'User successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Add an Thought to a User
  addthought(req, res) {
    console.log('You are adding an thought');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.UserId },
      { $addToSet: { thoughts: req.body } },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Remove thought from a User
  removethought(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.UserId },
      { $pull: { thought: { thoughtId: req.params.thoughtId } } },
      { runValidators: true, new: true }
    )
      .then((User) =>
        !User
          ? res
              .status(404)
              .json({ message: 'No User found with that ID :(' })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },
};
