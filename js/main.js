
var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('connected to server!');  
});

client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});

client.on('end', function() { 
   console.log('disconnected from server');
});

const Myform = document.getElementById("Myform");

Myform.addEventListener("submit",(e)=>{
    e.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var opcion = document.getElementById("opcion").value;


    console.log(nombre,apellido,opcion);
    console.log("Se enviaron datos");
    
    Enviar()
});

function Enviar(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var opcion = document.getElementById("opcion").value;

    var info = {
        method:"POST",
        body:{
            "nombre": nombre,
            "apellido": apellido,
            "opcion":opcion
        }

    }

}
