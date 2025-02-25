const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.get("/delete", courseController.delete);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;
