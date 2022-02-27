//CommonJS - Every file is module (By Default)
//Modules - Encapsulated Mode (Only Share Minimum)
//Our own created module has to start with a dot
//

const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor')

require(`./7-mind-grenade`)

//console.log(data)
// sayHi('Susan')
// sayHi(names.john)
// sayHi(names.peter)


// sayHi("Susan")
// sayHi(john)
// sayHi(peter)

// console.log(names)


//Modules allow us to make smaller files and more structure