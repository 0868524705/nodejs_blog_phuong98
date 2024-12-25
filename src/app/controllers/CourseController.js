const Course = require("./models/Course");

class CourseController {
  // [GET] //course/:slug
  nodejs(req, res) {
    res.send("NodeJS");
  }

  html(req, res) {
    res.send("NodeJS");
  }

  java(req, res) {
    res.send("NodeJS");
  }

  golang(req, res) {
    res.send("NodeJS");
  }

  json(req, res) {
    res.send("NodeJS");
  }

  responsive(req, res) {
    res.send("NodeJS");
  }
}

module.exports = new CourseController();
