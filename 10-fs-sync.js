//node will create a new file with writeFile Sync if its not there
//if the file is there, then node will overwrite it
//{flag: 'a'} will tell the node to append the text in file
//synchronous approach executes sequentially
//if one user is using 1 service, then node cant entertain other users
//its replacement is using CALLBACKS (asynchronous approach)

const {readFileSync, writeFileSync} = require("fs")

// const fs = require('fs')
// fs.readFileSync

console.log("Start");
const first = readFileSync("./content/first.txt", 'UTF-8')
const second = readFileSync("./content/second.txt",  'UTF-8')

//console.log(first, second)

writeFileSync("./content/result-sync.txt",
`Here is the result : ${first}, ${second}`,
{flag : 'a'})

console.log("Done with this task");
console.log("Starting next task");