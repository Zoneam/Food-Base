const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  like: {type: Number, },
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
  like: {
    type:[likeSchema]
  },
  link: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId, ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recepie', recepieSchema);