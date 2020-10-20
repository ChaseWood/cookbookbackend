const express = require("express");
const router = express.Router();
const Cookbook = require('../models/Cookbook');

// Write the route to list all cookbooks
router.get("/", (req, res) => {
  Cookbook.find({}).then((cookbooks) => {
    res.json(cookbooks);
  });
});
// Write the route to get cookbook by title
router.get("/title/:title", (req, res) => {
    
  Cookbook.find({ title: req.params.title }).then((cookbook) => {
    res.json(cookbook);
  });
});
// Write the route to get cookbook by year published
router.get("/year/:year", (req, res) => {
  Cookbook.find({ yearPublished: req.params.year }).then((cookbooks) => {
    res.json(cookbooks);
  });
});
// Write the route to create a cookbook
router.post("/", (req, res) => {
  Cookbook.create(req.body).then((cookbook) => {
    res.json(cookbook);
  });
});
// Write the route to update a cookbook
router.put("/:id", (req, res) => {
  Cookbook.findByIdAndUpdate(req.params.id, req.body).then((cookbook) => {
    res.json(cookbook);
  });
});
// Write the route to delete the cookbook by title
router.delete("/:title", (req, res) => {
  Cookbook.deleteOne({ title: req.params.title }).then((cookbook) => {
    res.json(cookbook);
  });
});

module.exports = router;
