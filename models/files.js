const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
  name: { type: String, required: 'name is required' },
  content: { type: String, required: 'content is required' },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('File', fileSchema);
