
// import {PythonShell} from 'python-shell';
// let pyshell = new PythonShell('testpython.py');

// // sends a message to the Python script via stdin
// pyshell.send('hello');

// pyshell.on('message', function (message) {
//   // received a message sent from the Python script (a simple "print" statement)
//   console.log(message);
// });

// // end the input stream and allow the process to exit
// pyshell.end(function (err,code,signal) {
//   if (err) throw err;
//   console.log('The exit code was: ' + code);
//   console.log('The exit signal was: ' + signal);
//   console.log('finished');
//   console.log('finished');
// });


var {PythonShell} = require('python-shell')
var path = require("path")

var options = {
    scriptPath : path.join(__dirname,'./'),
    args:["this is data"]
}

var runpython = new PythonShell("testpython.py", options);

var i =0
runpython.on('message', function(message){
    if(message=="Connected"){
        
    }
    if(i===0){
        callFromPython();
        console.log("Working Python1")
        i=1;
    }
    else if(i===1){
        callFromPython2();
        console.log("Working Python2");
        i=2;
    }
    else if(i===2){
        callFromPython3();
        console.log("Working Python3")
        i=0;
    }
    
});