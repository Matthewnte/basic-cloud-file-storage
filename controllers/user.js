const User = require('../models/user');

exports.creatUser = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    createdDate: req.body.createdDate,
  });
  user.save().then(() => {
    res.status(201).json({
      status: 'success',
      data: {
        message: 'User account successfully created',
      },
    });
  });
};

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

exports.getOneUser = (req, res) => {
  User.findOne()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};
