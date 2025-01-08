const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

// connect to db
db.main();

app.use(methodOverride("_method"));
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); // phương thức này để xử lý khi sử dụng js để submit

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum(a, b) {
        return a + b;
      },
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// Route init
route(app);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Middleware: chức năng cô lập với request và response
