
const {readFile, writeFile} = require('fs')

console.log('vamos')

// 2 readFile anidados
readFile('./content/third.txt','utf-8',(err,result)=> {
    if (err){
        console.log(err.message);
        return;
    }
    const tres=result;
    readFile('./content/second.txt','utf-8',(err,result)=> {
        if (err){
            console.log(err.message);
            return;
        }
        const dos=result;

        writeFile('./content/result-async.txt',`Escribo async dos=${dos}\ny tres:\n${tres}`,(err)=>{
            if (err) console.log(err.message);
            else console.log('Archivo 23 creado async.');
        })
    })
})



console.log('listo.')

