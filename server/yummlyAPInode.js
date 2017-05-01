// content of index.js
const http = require('http')  
const port = 3000
// Require module
var yummly = require('yummly');


var credentials = {
  id: '0dce280a',
  key: '9c9bb07049e77a49e5539ef78a5b18b6'
}

yummly.search({
  credentials: credentials,
  query: {
    q: 'chicken'
  }
}, function (error, response, json) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    console.log(json);
  }
});

