const {readFile,writeFile}=require('fs')

const util = require('util');
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt','utf8');
        const second = await readFilePromise('./content/second.txt','utf8'); 
        const gen=new Date;
        const momento= gen.getDay()+'/'+gen.getMonth()+'/'+gen.getFullYear() +' '+
                     gen.getHours()+':'+gen.getMinutes() + ':'+ gen.getSeconds()
        await writeFilePromise('./content/cuarto.txt',`Combinado ${momento}\n${first}\n\n${second}\n===================\n`,{flag:'a'})
        const cuarto=await readFilePromise('./content/cuarto.txt')
        console.log(first);
        console.log(second);
        console.log(`-------------------------\nAsi quedo el cuarto:\n\n${cuarto}`);
    } catch (error) {
        console.log(error);
    }
    
    
}

start()
// const  getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,'utf-8',(err,data)=>{
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }


// const data1=getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err));

// const data2=getText('./content/second.txt')
//     .then((result)=>console.log(result))
//     .catch((err)=>console.log(err));
