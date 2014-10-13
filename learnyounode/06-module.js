var fs = require('fs');
var path = require('path');

module.exports =  function (dir, extension, callback) {
    fs.readdir(dir, function (err, list) {
	
	    if (err) { 
            return callback(err);
        } // early return
			
		var files = [];
		
		list.forEach(function (file) {
			if (path.extname(file) === '.' + extension) {
				files[files.length] = file;
            }
		});
		
		callback(null, files);
		
	});
};