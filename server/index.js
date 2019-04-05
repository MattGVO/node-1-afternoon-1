const express = require('express')
const app = express()
const port = 4009
const rootURL = "/api/"
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

app.get(`${rootURL}products`, getProducts)

app.get(`${rootURL}product/:id`, getProduct)

app.listen(port, () => console.log(`Server is a listenin' on port: ${port}`))