const script2 = require('./script2.js') //path to the file. In this case, path to script2.js

const a = script2.largeNumber;
const b = 5;

setTimeout(() =>{
	console.log(a+b);
}, 3000) //return the answer of a + b after 3 seconds

console.log(__dirname); //tells your directry
