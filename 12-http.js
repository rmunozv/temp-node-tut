const http = require('http');

const server=http.createServer((req,res)=>{
    if (req.url==='/') {
        res.end(`
        <!DOCTYPE html>
        Hola <h1>Bienvenido a nuestra home page</h1><br>
        <a href='/about'>Acerca de nosotros</a>
        `);
        return;
    }
    if (req.url==='/about') {
        res.end('<!DOCTYPE html>Pagina de about.<br><br><a href="/">Al inicio</a>.')
        return;
    }
    res.end(`<b>Oops</b>. No existe la pagina <i>${req.url}</i>. Volver al <a href='/'>inicio<a/>.
    `)
})

server.listen(5000);

