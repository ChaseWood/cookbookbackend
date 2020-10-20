const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cookbooks_db', { useNewUrlParser: true })

mongoose.Promise = Promise

module.exports = mongoose
