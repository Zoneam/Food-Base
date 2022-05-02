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
  picture: {
    type: String
  },
  calories: {
    type:Number
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