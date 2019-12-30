var express=require('express');
var fs=require('fs');
var path=require('path');
var listeners=require('./handlers');

var app=express();

app.use(express.static(path.join(__dirname,'public')));

//Serve side Routing logic
//mapping requests with specific handlers

app.get('/hello',listeners.onHello);
app.get('/flowers',listeners.onFlowers);
app.get('/', function(request, response){
    response.sendFile(path.join(__dirname+'/index.html'));  
});

var onListen=function(){
    console.log("Web EStore is listening on port 9999");
}
app.listen(9999,onListen);