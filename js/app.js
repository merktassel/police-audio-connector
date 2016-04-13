// jshint asi: true

var exec = require('child_process').exec;

function updateLog(text) {
	jQuery('.log').append(text + ' ' + '&#13;&#10;')
}

function executeCommand(command) {
	exec(command, function(error, stdout, stderr) {
		updateLog(stdout)
	})
}

function scan() {
	updateLog('Scanning, please wait.')
	executeCommand('bt-adapter -d')
}

function connect() {
	var device = prompt('Enter the MAC address of the device you wish to connect')
	updateLog('Trying to connect to' + ' ' + device)
	executeCommand('bt-audio -c' + ' ' + device)
}

function disconnect() {
	var device = prompt('Enter the MAC address of the device you wish to disconnect')
	updateLog('Trying to disconnect from' + ' ' + device)
	executeCommand('bt-audio -d' + ' ' + device)
}

function forget() {
	var device = prompt('Enter the MAC address of the device you wish to remove')
	updateLog('Trying to forget' + ' ' + device)
	executeCommand('bt-device -r' + ' ' + device)
}

jQuery('document').ready(function() {
	updateLog('Ready to Go')
})
