const express = require('express')
const app = express()
const port = 3000

app.get('/bruh', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  var a = 1;
  var b = 2;
  var c = a + b;
  console.log(`Example app listening at http://localhost:${port}`)
})