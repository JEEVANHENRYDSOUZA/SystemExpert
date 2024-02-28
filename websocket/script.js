const express= require('express');

const expressWs = require('express-ws');

const app = express();
expressWs(app);
app.use(express.json());

const messages=[{id:0,text:'welcome',username:'chatbot'}];


const sockets=[];


app.listen(5500,()=>{
    console.log("app is lisetening on port 5500")
});


app.get('/messages',(req,res)=>{
    res.json(messages);
})


app.post('/messages',(req,res)=>{
    const message=req.body;
    messages.push(message);
    for(const socket of sockets){
        socket.send(JSON.stringify(message));
    }
})


app.ws('/messages',socket=>{
    sockets.push(socket);
    socket.on('close',()=>{
        sockets.splice(sockets.indexOf(socket),1);
    });
})