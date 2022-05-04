// content of index.js
const http = require('http')
const contract = require('./invoke.js')

const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  contract.main()
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('erro', err)
  }
  console.log(`server is listening on ${port}`)
})