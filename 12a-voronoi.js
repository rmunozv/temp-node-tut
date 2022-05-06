// Manejo de npm packages
//
// npm init -y
// npm i <algun package>
// 

const _ = require('lodash');
const Voronoi = require('voronoi');


const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems);

var voronoi = new Voronoi();
var bbox = {xl: 0, xr: 800, yt: 0, yb: 600}; // xl is x-left, xr is x-right, yt is y-top, and yb is y-bottom
var sites = [ {x: 200, y: 200}, {x: 50, y: 250}, {x: 400, y: 100} /* , ... */ ];

var diagram = voronoi.compute(sites, bbox);

console.log('--EDGES----------------------------------\n');
console.log(diagram.edges);

console.log('---VERTICES---------------------------------\n');
console.log(diagram.vertices);

console.log('-----CELLS-------------------------------\n');
console.log(diagram.cells);
