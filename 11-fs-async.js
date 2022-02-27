//asynchronous approach is efficient comparativerly to synchronous one
//but it makes the code messy with so many nested callbacks
//its alternatives are PROMISES or ASYNC-AWAIT

const {readFile, writeFile} = require("fs")

console.log("Start");
readFile('./content/first.txt','UTF-8', (err,result) => {
    if (err){
        console.log(err)
        return;
    }
    first = result
    // console.log(first);
    readFile('./content/second.txt','UTF-8', (err,result) => {
        if (err){
            console.log(err)
            return;
        }
        second = result
        // console.log(second);
        writeFile("./content/result-async.txt",
         `Here is the result : ${first}, ${second}`,
         (err,result) => {
             if (err){
                 console.log(err);
                 return;
             }
             console.log("Done with this task");
         })
    })
})
console.log("Starting next task");