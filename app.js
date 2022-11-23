// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about',(req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  console.log(req)
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
