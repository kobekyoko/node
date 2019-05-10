## node
How to import and export files on Node.js

## How to import and export files on Node.js

★Script.js

const script2 = require('./script2.js')

const a = script2.largeNumber

★Script2.js

const largeNumer = xxx;

module.exports = {
largeNumber: largeNumber
};

## How to run

Go to git bash and type

node script.js

(works the same on Mac and Windows)


