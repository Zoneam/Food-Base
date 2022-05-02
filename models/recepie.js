const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: {type: String, required: true},
  user: {
    type: Schema.Types.ObjectId,
     ref: 'User'
    },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const recepieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String]
  },
  picture: {
    type: String
  },
  calories: {
    type:Number
  },
  prepareTime: {
    type: String,
  },
  comments: {
    type:[commentSchema]
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recepie', recepieSchema);