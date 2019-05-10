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

## nodemon installed

To watch the changes on the files constantly, I installed nodemon.

For more details about nodemon, read here.

https://github.com/remy/nodemon

After installed nodemon, change package.json's sentence a little bit.

"scripts": {
    "start": "nodemon"
  },
  
  Also, check the version of nodemon on package.json.



