
/*
 * GET home page.
 */

var fs = require('fs');
var config = require('../fi-tube_config');

exports.index = function(req, res){

	fs.readdir(config.video_path, function (err, files) {
		console.log(files, err);
		var videos = {};
		var index = 0;
		files.forEach (function (f) {
			videos[index] = f;
			index++;
		});
		res.render('index', {files: videos});
	});

  	
};