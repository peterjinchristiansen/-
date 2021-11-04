require('dotenv').config()
const mongoose = require('mongoose')

const db = () => {
    mongoose.connect(process.env.MONGODB_URI || process.env.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to DB'))
}

module.exports = db