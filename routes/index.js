
/*
 * GET home page.
 */

var fs = require('fs');
var config = require('../fi-tube_config');

exports.index = function(req, res){

	fs.readdir(config.video_path, function (err, files) {
		console.log(files, err);
		res.render('index', {files: files});
	});

  	
};