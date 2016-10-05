var express = require('express')
var path = require('path')
var app = express()

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res, next){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(3000, function(){
  console.log('express is up running on port 3000...');
})
