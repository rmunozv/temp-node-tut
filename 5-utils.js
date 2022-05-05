
const sayHi = (name) => {
    console.log(`Hola ${name}`);
}


//module.exports={sayHi} // Ojo, con las {} la funcion sayHi queda accesible como ESTEMODULO.sayHi()
// default export
module.exports=sayHi // Ojo, sin las {} la funcion sayHi queda para uso directo en el requeridor

/* Proposito: exportar funcion */