
var net = require('net');


var client = net.connect({port: 8000}, function() {
    console.log('connected to server!');

    console.log('sending message...');

});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server');
});

//socket sent

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