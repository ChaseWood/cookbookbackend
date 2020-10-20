const express = require("express");
const router = express.Router();
const Author = require('../models/Author');
const Cookbook = require("../models/Cookbook");
// Write the route to list all authors
router.get("/", (req, res) => {
  Author.find({}).then((authors) => {
    res.json(authors);
  });
});
// Write the route to get authors by firstname
router.get("/:name", (req, res) => {
  Author.find({ firstName: req.params.name }).then((authors) => {
    res.json(authors);
  });
});
// Write the route to create an author:
router.post("/", (req, res) => {
  Author.create(req.body).then((author) => {
    res.json(author);
  });
});
// Write the route to update an author
router.put("/:name", (req, res) => {
  Author.findOneAndUpdate({ firstName: req.params.name }, req.body).then(
    (author) => {
      res.json(author);
    }
  );
});

//Write a route to delete an author
router.delete("/:id", (req, res) => {
  Author.delete({ _id: req.params.id }).then((author) => {
    res.json(author);
  });
});
// Write the route to get all
router.get("/:id/cookbooks", (req, res) => {
  Author.find({ _id: req.params.id })
    .populate("cookbooks")
    .then((authors) => {
      res.json(authors);
    });
});

module.exports = router;
