const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
        type: String,
        required: true
    }
}, {
    toJSON: { virtuals: true }
})

userSchema.virtual('fullName').get(() => {
    return `${this.firstName} ${this.lastName}`
})

const User = mongoose.model('User', userSchema)
module.exports = User