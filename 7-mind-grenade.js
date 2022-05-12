const num1=Math.ceil(20*Math.random());
const num2=10;

function addValues() {
    console.log(`the sum ${num1}+${num2} is : ${num1+num2}`);
    return num1+num2;
}

module.exports.resultado_7=addValues()

/* Proposito: Se require desde afuera y ejecuta todo esto. */
// Basta con: require('./7-mind-grenade')
//
// Tambien puede ser:
// const res7=require('./7-mind-grenade')
// console.log(`recupero el export y es ${res7.resultado_7}`)
