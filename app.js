const twilio = require("twilio");
const accountSid = 'AC878ee57a7037b15bcf23aaf6b6df770d';
const authToken = '1eb70a6d5594ba9e76d1adefa97ba3c0';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
     body: 'Olá! Sou o romulo fernandes!',
     from: '+18455934459',
     to: '+5598981817051'
   }, function(error, message) {
       if(!error){
           console.log("Mensagem enviada!")
       }else{
           console.log("Mensagem não enviada")
       }
   
});












