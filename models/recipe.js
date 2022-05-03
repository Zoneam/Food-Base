const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const likeSchema = new Schema({
  recipeId: String,
  likes: {
    type: Number,
    default: 0,
    },
  users: Array
}, {
  timestamps: true
});

// likeSchema.methods.likesCount = () => {
//   return this.users.length;
// }

const recipeSchema = new Schema({
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

const Recipe = mongoose.model('recipe', recipeSchema);

const Like = mongoose.model('Like', likeSchema);

module.exports = { Recipe, Like }


// Something.findOne({ _id: id }).exec(function (error, something) {
//   something.changedName();
// });