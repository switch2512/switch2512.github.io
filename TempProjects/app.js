let fs = require('fs');
let exampleJSON = {};
fs.readFile('test.json', 'utf8', function(err, data) {
    exampleJSON = JSON.parse(data);
})

console.log(exampleJSON)
console.log("this is the testing thing:" + exampleJSON.person.name)