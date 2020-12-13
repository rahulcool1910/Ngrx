import * as express from "express";
import { Application } from "express";
import { getAllCourses, getCourseById } from "./get-courses.route";
import { searchLessons } from "./search-lessons.route";
import { loginUser } from "./auth.route";
import { saveCourse } from "./save-course.route";

import * as cors from "cors";

const bodyParser = require("body-parser");

const app: Application = express();
app.use(cors());

app.use(bodyParser.json());

app.route("/api/login").post(loginUser);

app.route("/api/courses").get(getAllCourses);

app.route("/api/courses/:id").put(saveCourse);

app.route("/api/courses/:id").get(getCourseById);

app.route("/api/lessons").get(searchLessons);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type,X-Request-With,Accept,Authorization"
  );
  res.setHeader("Access-Control-Allow-Method", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

const httpServer = app.listen(9000, () => {
  console.log(
    "HTTP REST API Server running at http://localhost:" +
      httpServer.address().port
  );
});
