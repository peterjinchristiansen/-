require('dotenv').config({ path: './config/.env' })
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const http = require("http")

const typeDefs = require('./schemas/typeDefs')
const resolvers = require('./schemas/resolvers')
const {authMiddleware} = require('./utils/auth')
const db = require('./config/connect')

const PORT = process.env.PORT || 4000
const app = express()

let apolloServer = null
const startServer = async () => {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        graphiql: true,
        context: authMiddleware
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })
}
db()
startServer()
const httpserver = http.createServer(app)
app.listen(PORT, function () {
    console.log(`server running on PORT ${PORT}...`)
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())