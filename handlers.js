exports.onDefault=function(request,response){
    response.send({message:'Hello World !'});
}

exports.onHello=function(request, response){
    var person={
        firstname:'ravi',
        lastname:'tambade',
        phone:'9881735801'
    }
    response.send(person);
};

exports.onFlowers=function(request, response){
var flowers=[
    {title:'Gerbera', 
     description:'Festival Flower',
     unitprice:5,
     quantity:5000,
      develiveryterm: 'payment on delivery'
    },
    {title:'Rose', 
     description:'Valentine Flower',
     unitprice:15,
     quantity:5000,
      develiveryterm: 'payment on delivery'
    }
];


//invoke data from connectors  


response.send(flowers);
}