const fs = require('fs');
const path = require('path');
const util = require('util');

//const uuid
const { v4: uuidv4 } = require('uuid');

// readfile async
const readFileAsync = util.promisify(fs.readFile);
// writefile async
const writeFileAsync = util.promisify(fs.writeFile);

// class that is store
class Store {

}
//Read, write and get notes.  Needs a JSON.stringify

// read in brackets call apon db
// same for write

// get return.read() and a .then(tri-catch) if notes are not there need and empty array


// add note if statement
// remove note in the store class

//module.exports
