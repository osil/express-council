const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
// const blogRouter = require("./routes/blog");
const councilsRouter = require("./routes/councils");

// const basicAuth = require("express-basic-auth");

// const corsOptions = {
//   origin: "https://plan.rmu.ac.th",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

const app = express();
// app.use(cors(corsOptions));
app.use(cors());
app.use(helmet());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
// app.use("/api/users", usersRouter);
// app.use("/api/blog", blogRouter);
app.use("/api/councils", councilsRouter);

module.exports = app;
