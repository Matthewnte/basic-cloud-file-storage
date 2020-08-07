const File = require('../models/files');

exports.creatFile = (req, res) => {
  const file = new File({
    name: req.body.name,
    content: req.body.content,
    createdDate: req.body.createdDate,
  });
  file
    .save()
    .then(() => {
      res.status(201).json({
        status: 'success',
        data: {
          message: 'file successfully created',
        },
      });
    })
    .catch((error) => {
      res.status(400).json({
        status: 'Failed',
        error,
      });
    });
};

exports.getFiles = (req, res) => {
  File.find()
    .then((files) => {
      res.status(200).json(files);
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

exports.getOneFile = (req, res) => {
  File.findOne()
    .then((file) => {
      res.status(200).json(file);
    })
    .catch((error) => {
      res.status(404).json({
        error,
        message: 'File not found',
      });
    });
};
