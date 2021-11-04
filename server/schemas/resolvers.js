const { AuthenticationError } = require('apollo-server-express')
const User = require('../models/User')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        getMe: async (parent, args, context) => {
            console.log('hi')
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password')
                return userData
            }
            throw new AuthenticationError('Not logged in')
        }
    },
    Mutation: {
        registerUser: async (parent, args) => {
            const user = await User.create(args)
            const token = signToken(user)
            return { token, user }
        },
        loginUser: async (parent, args) => {
            const user = await User.findOne({ username: args.username })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(args.password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user)
            return { token, user }
        }
    }
}

module.exports = resolvers