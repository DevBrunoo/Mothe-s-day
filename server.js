const { resolveSoa } = require('dns');
const express = require('express')
const app = express()
const PORT = 3000;


app.set('view engine', 'ejs')

app.get('', (req, res) =>{
    res.render('layout.ejs')
})
app.get('/ablout', (req, res) =>{
    res.render('index.ejs')
})


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})