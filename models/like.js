const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  recipe:  {
    type: String,
    },
  likes: {
    type: Number,
    default: 0,
    },
  users: Array,
}, {
  timestamps: true
});

// likeSchema.methods.likesCount = () => {
//   return this.users.length;
// }

module.exports = mongoose.model('Like', likeSchema);