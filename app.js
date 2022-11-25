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

app.get('/:id',(req, res) => {
  const id = req.params.id
  console.log('id', id)
  res.render(`${req.params.id}`, { id })
})

// Start and listen the server
app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
