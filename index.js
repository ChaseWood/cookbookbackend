require("dotenv").config;
const { PORT = 4500, NODE_ENV = "development" } = process.env;

const mongoose = require("./db/connection");

const cors = require("cors");
const corsOptions = require("./configs/cors.js");

const express = require("express");
const app = express();

const morgan = require("morgan");

// 1. Require body-parser and save it to the variable parser.
const parser = require("body-parser");

const cookbookRouter = require("./controllers/cookbookRoutes");
const authorRouter = require("./controllers/authorRoutes");

NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());

// 2. Add the coded needed to make body-parser work within your app.
app.use(parser.json());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/api/cookbooks/", cookbookRouter);
app.use("/api/authors/", authorRouter);

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

app.listen(PORT, () => console.log(`Your are listening on port ${PORT}`));
