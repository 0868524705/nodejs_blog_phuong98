const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/:slug", courseController.nodejs);
router.get("/:slug", courseController.html);
router.get("/:slug", courseController.json);
router.get("/:slug", courseController.java);
router.get("/:slug", courseController.responsive);
router.get("/:slug", courseController.golang);

module.exports = router;
