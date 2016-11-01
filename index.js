var express = require('express');
var app = express();
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) { sys.puts(stdout) }

app.get('/', function (req, res) {
	exec("xdotool key Ctrl+alt+l", puts);
});

app.listen(80, function () {
  console.log('Honeypot activated');
});
