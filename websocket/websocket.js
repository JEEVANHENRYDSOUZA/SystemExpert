const axios = require('axios');
const websocket= require('ws');




function createMessage(){
    return new websocket('ws://localhost:5500/messages');
}



function getMessage(){
    return axios.get('http://localhost:5500/messages').then(res=>res.data)
}



function sendMessage(message){
        return axios.post('http://localhost:5500/messages', message);
        
}



module.exports.createMessage=createMessage;
module.exports.sendMessage=sendMessage;
module.exports.getMessage=getMessage;