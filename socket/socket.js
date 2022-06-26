//socket sent
var net = require('net');
var port=8000
var host='localhost'

let socket = new net.Socket();

socket.connect(port, host, () => {

    socket.write("hola");
    
});

socket.on('data', data => {
    console.log(`${data}`);
  });
  
socket.on('close', () => {
    socket.destroy();
  });

