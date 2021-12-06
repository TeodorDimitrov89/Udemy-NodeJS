const express = require('express');
const app = express();

// app.use('/', (req, res, next) => {
//   console.log('Home Middleware');
//   // res.send('<h1>Home Page from Express JS</h1>');

//   next()
// });

// app.use('/add-page', (req, res, next) => {
//   console.log('add page middleware')
//   res.send('<h1>Add Page Middleware</h1>')
// })

app.use('/users', (req, res) => {
  res.send('<h1>Users Page</h1>')
})

app.use('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})




app.listen(4000);