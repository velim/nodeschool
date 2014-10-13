var http = require('http');
var concat = require('concat-stream')

function callback (response) {   
   var str = ''
   response
		.on('data', function(data) {
			str += data.toString()
		})
		.on('end', function() {
			console.log(str.length)
			console.log(str)
		})
}

http.get(process.argv[2],callback)

/*
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})
*/