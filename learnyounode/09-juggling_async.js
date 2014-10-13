var http = require('http')
var concat = require('concat-stream')

var res = []
var cnt = 0

function callback1 (response) {   
   var str = ''
   response
		.on('data', function(data) {
			str += data.toString()
		})
		.on('end', function() {
			res[0] = str
			if(++cnt == 3){
			  res.forEach(function (item){
				console.log(item)
			  })
			}
		})
}

function callback2 (response) {   
   var str = ''
   response
		.on('data', function(data) {
			str += data.toString()
		})
		.on('end', function() {
			res[1] = str
			if(++cnt == 3){
			  res.forEach(function (item){
				console.log(item)
			  })
			}
		})
}

function callback3 (response) {   
   var str = ''
   response
		.on('data', function(data) {
			str += data.toString()
		})
		.on('end', function() {
			res[2] = str
			if(++cnt == 3){
			  res.forEach(function (item){
				console.log(item)
			  })
			}
		})
}

http.get(process.argv[2],callback1)
http.get(process.argv[3],callback2)
http.get(process.argv[4],callback3)



/*
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/