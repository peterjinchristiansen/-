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
    profilePicture: {
        type: String,
        required: true,
        default: 'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=640:*'
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