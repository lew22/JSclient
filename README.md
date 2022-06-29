# JSclient
 
 Instalar live server en visual studio code
 luego en index.html click derecho y "live server"
 Entonces Ingresar datos 
 y "click" en enviar



# live server running

npm install -g live-server

ó

git clone https://github.com/tapio/live-server
cd live-server
npm install # Local dependencies if you want to hack
npm install -g # Install globally


cd concurrentecanaval/tf/JSfrontend


live-server --host=127.0.0.1 --port=5502 --entry-file="html/index.html"

live-server --host=127.0.0.2 --port=5501 --entry-file="html/index.html"

