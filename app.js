const twilio = require ("twilio");
var client = new twilio.RestClient("AC878ee57a7037b15bcf23aaf6b6df770d", "1eb70a6d5594ba9e76d1adefa97ba3c0");
client.sms.messages.creat({
    to: "+559881817051",
    from:"+559884047409",
    body:""
}, function(error, message){
    if(!error){
        console.log("Mensagem enviada");
    }else{
        console.log("Mensagem não enviada")
    }
});















