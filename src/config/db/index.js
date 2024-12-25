const mongoose = require("mongoose");

function connect() {
  try {
    mongoose.connect("mongodb://localhost:27017/phuong_education_dev");
    console.log("connect successfully");
  } catch (error) {
    console.log("connect failure");
  }
}
module.exports = { connect };
