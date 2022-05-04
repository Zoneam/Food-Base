const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
      type: Schema.Types.ObjectId, ref: 'Like'
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



module.exports = mongoose.model('Recipe', recipeSchema);


// Something.findOne({ _id: id }).exec(function (error, something) {
//   something.changedName();
// });