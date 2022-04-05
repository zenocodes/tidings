const express = require('express')
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/about', (req, res) => {
    res.render('about-us.ejs')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server up on PORT ${PORT}`)
})