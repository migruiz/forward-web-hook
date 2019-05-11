'use strict';

const ioHook = require('iohook');


ioHook.on('mousedown', event => {
  if (event.clicks>2){
    console.log(event); // { type: 'mousemove', x: 700, y: 400 }
const spawn = require('child_process').spawn;
const ls = spawn('killall', ['-q','-I', 'teamviewer']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
  }
});

// Register and start hook
ioHook.start();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);