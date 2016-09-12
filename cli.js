#!/usr/bin/env node
'use strict';
var meow = require('meow');
var restart = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ reboot',
		''
	]
});

restart( function (err, stderr, stdout) {
	if(!err && !stderr) {
		console.log(stdout);
	}
});
