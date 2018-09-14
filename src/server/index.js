const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const compression = require('compression')
const mongoose = require('mongoose')

const config = require('./config')

const apiRoutes = require('./routes/api')
const appRoutes = require('./routes/app')

mongoose.connect(config.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongo!')
})

const server = express()

server.use(morgan('dev'))
server.use(helmet())
server.use(compression())
server.use(bodyParser.json())

if (!config.IS_PRODUCTION) {
    server.use(express.static(path.join(__dirname, '../../dist')))
}

server.use(express.static(path.join(__dirname, 'public')))
server.use('/api', apiRoutes)
server.use(appRoutes)

server.listen(config.PORT, () => {
    console.log('Server is up and running on port ' + config.PORT)
})
