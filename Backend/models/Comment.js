// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema(
//   {
//     article: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "places",
//       required: true,
//     },
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//     content: { type: String, required: true },
//     likes: { type: Number, default: 0 },
//     replies: [
//       {
//         user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//         content: String,
//         createdAt: { type: Date, default: Date.now },
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Comment", commentSchema);



const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  place: { type: mongoose.Schema.Types.ObjectId, ref: "Place", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Comment", CommentSchema);

