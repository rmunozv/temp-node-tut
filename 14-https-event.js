const http=require('http')

// using event emitter
const server=http.createServer()

server.on('request',(req,res)=>{
    res.write('<h1>Welcome al server manejado con event emitter.</h1>')
    res.write(`Atendiendo a ${req.url}`)
    res.end()
})

server.listen(5000)
