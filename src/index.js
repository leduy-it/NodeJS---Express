const hbs  = require('express-handlebars');
const path = require('path')
const express = require('express')
const port = 3000

const app = express()
const morgan = require('morgan')

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname ,'public')));


//HTTP Logger 
app.use(morgan('combined')) //Not used

//Template engine
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log('PATH:', path.join(__dirname, '/resources/views')); 


 
app.get('/', (req, res) => {
  res.render('home');
}); 
app.get('/news', (req, res) => {
  res.render('news');
}); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  