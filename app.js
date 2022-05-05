// Manejo de npm packages
//
// npm init -y
// npm i <algun package>
// 

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);