let express = require('express')
let app = express()

// Moteur de template

app.set('view engine', 'ejs')
app.use('/assets', express.static('public'))
app.use('/custom', express.static('vendor'))

// Routes

app.get('/', (request, response) => {
    response.render('pages/index')
})

app.listen(8080)