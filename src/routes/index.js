const newRouter = require("./news");
const siteRouter = require("./site");
const coursesRouter = require("./courses");
const meRouter = require("./me");

function route(app) {
  // bắt buộc phải khai báo ở đây
  // Action -- router -- Dispatcher -- Funtion handler
  app.use("/news", newRouter);
  app.use("/me", meRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}
module.exports = route;
