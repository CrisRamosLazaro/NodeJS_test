const http = require('http')

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    if (req.url === '/') {
        res.write('¡Hola, mundo!')
        res.end()
    } else {
        res.write('Página no encontrada')
        res.end()
    }
})


server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
