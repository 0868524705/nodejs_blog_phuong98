const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/meController");

router.get("/stored/courses", courseController.storedCourses);

module.exports = router;
