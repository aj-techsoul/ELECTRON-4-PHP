// PHP RUNNER /////
//
// RUN PHP in Windows
function run_php(){
const { spawn } = require('child_process');
//const bat = spawn('cmd.exe', ['php/setenv.bat']);
bat    = spawn('cmd.exe', ['/c', 'setenv.bat']);

bat.stdout.on('data', (data) => {
  console.log(data.toString());
});

bat.stderr.on('data', (data) => {
  console.log(data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});
}
//////////////////////////////////////

// PHP SERVER CREATION /////
/*
const PHPServer = require('php-server-manager');

const server = new PHPServer({
    port: 3000,
    directives: {
        display_errors: 1,
        expose_php: 1
    }
});

*/
//////////////////////////
