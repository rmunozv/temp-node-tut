const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:32767,encoding:'utf8'})

let size=0;
stream.on('data',(result)=>{
    size+=result.length;

    console.log(`Recibidos ${result.length}, van ${size}`);
})
stream.on('end', () =>{
    console.log(`Total size: ${size}`)
})

stream.on('error',(err)=>{
    console.log(err.message);
})
