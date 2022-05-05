const fs=require('fs')

const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

const fname = './content/third.txt';
const content = 'Este es el 3er archivo de texto';

writeFileSync(fname,content);
writeFileSync(fname,'\n',{flag:'a'});
writeFileSync(fname,first,{flag:'a'});
writeFileSync(fname,'\n',{flag:'a'});
writeFileSync(fname,second,{flag:'a'});

