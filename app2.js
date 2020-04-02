var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<H1>WELCOME</H1>')
});

app.listen(3000, () => {
  console.log('listening on port 3000')
});