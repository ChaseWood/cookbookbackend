//import connection
const mongoose = require('../db/connection');


/* Create Cookbook as new schema
    Properties:
    title (string),
    yearPublished (integer),
*/
const CookbookSchema = new mongoose.Schema({
    title: String,
    yearPublished: Number,
})

//export model
const Cookbook = mongoose.model('Cookbooks', CookbookSchema);
module.exports = Cookbook;