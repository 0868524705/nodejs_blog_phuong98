const Course = require("./models/Course");

class SiteController {
  // [GET] /news

  async home(req, res, next) {
    try {
      const courses = await Course.find({}).lean();
      res.render("home", { courses });
    } catch (error) {
      next(error);
    }
  }
  // cách read db sử dụng promise
  // index(req,res,next) {
  //   Course.find({})
  //   .then(courses => res.json(courses))
  //   .catch(next);
  // }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
