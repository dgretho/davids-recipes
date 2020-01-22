const express = require('express')
const app = express()

const path = require('path')

app.get('/', (req, res) => {
    res.render('home', { title: `David's recipes` })
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static('public'));

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});

