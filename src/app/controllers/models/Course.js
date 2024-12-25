const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const { urlencoded } = require("body-parser");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, maxLength: 200 },
    description: { type: String, maxLength: 200 },
    image: { type: String, maxLength: 200 },
    slug: { type: String, slug: "name", unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
