const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))