'use strict';
var isLinux = require('is-linux'),
	isOsx = require('is-osx'),
	isWindows = require('is-windows'),
	cp = require('child_process');

module.exports = function (cb) {
	var cmd = '';

	if(isLinux() || isOsx()) {
		console.log("reboot");
		cmd = 'sudo shutdown -r now';
	} /*else if(isWindows()) {
		cmd = 'shutdown -s';
	}*/ else {
		throw new Error('Unknown OS!');
	}

	cp.exec(cmd, function (err, stderr, stdout) {
		cb(err, stderr, stdout);
	});
};
