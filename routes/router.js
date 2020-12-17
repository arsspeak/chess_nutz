const app = require('express')()
app.set('view engine', 'ejs')








// Home
app.get('/', (req, res) =>{
    res.render('home')
})
// User profile
app.get('/user', (req,res) =>{
    res.render('user')
})
// Login/Register
app.get('/login', (req,res) =>{
    res.render('loginAndreg')
})
// Game

app.get('/game', (req,res) =>{
    res.render('game')
})





module.exports = app