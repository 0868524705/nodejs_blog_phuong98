const Course = require("./models/Course");

class CourseController {
  // [GET] //course/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .lean()
      .then((course) => {
        res.render("courses/show", { course });
      })
      .catch(next);
  }

  // [GET] //create
  create(req, res, next) {
    res.render("courses/create");
  }
  // [POST] //create/store
  store(req, res, next) {
    const formData = req.body;
    formData.img = `https://img.youtube.com/vi/${req.body.videoID}/sddefault.jpg`;
    const newCourse = new Course(formData);
    newCourse
      .save()
      // redirect là api reference để chuyển hướng về home
      .then(() => res.redirect("/"))
      .catch(next);
  }

  delete(req, res, next) {
    
  }

  // [GET] //edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render("courses/edit", { course });
      })
      .catch(next);
  }

  // [PUT] //course/:id/update
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
