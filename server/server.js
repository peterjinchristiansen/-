const express = require('express')

const app = express()
const PORT = 4444

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`)
})