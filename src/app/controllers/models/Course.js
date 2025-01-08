const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const { urlencoded } = require("body-parser");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, required: true, },
    description: { type: String },
    img: { type: String },
    slug: { type: String, slug: "name", unique: true },
    videoID: { type: String },
    author: { type: String },
    level: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
