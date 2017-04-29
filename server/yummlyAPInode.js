// content of index.js
const http = require('http')  
const port = 3000
var yummly = require('yummly');


//yummly credentials
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

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)

})