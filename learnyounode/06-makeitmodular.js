var mymodule = require('./06-module.js')

function callback(err,list) {

    if (err)
       return console.error('There was an error:', err)	
	   
	list.forEach(function (file) {
       console.log(file)
    })
	
}

mymodule(process.argv[2],process.argv[3],callback)
