const helpers=require('./helper');
const websocket=require('./websocket');

const readline=require('readline');


const dislpaymesages={}
const terminal=readline.createInterface({
    input:process.stdin,
})

terminal.on('line',text=>{
    const username=process.env.NAME;    
    const id = helpers.randomNumber(100000);
    dislpaymesages[id]=true;
    const message={id,text,username};
    websocket.sendMessage(message);


})



function dislpaymesage(message){
    console.log(` > ${message.username} ${message.text}`);
    dislpaymesages[message.id]=true;
}


async function getanddisplay(){
    const messages= await websocket.getMessage();
    for(const message of messages){
        const messagealreadydisplayed=message.id in dislpaymesages

        if(!messagealreadydisplayed){
            dislpaymesage(message);
        }
    }
}


function StreamMessages(){
    const messagingsocket=websocket.createMessage();
    messagingsocket.on('message',data=>{
        const message= JSON.parse(data);
        const messagealreadydisplayed=message.id in dislpaymesages

        if(!messagealreadydisplayed){
            dislpaymesage(message);
        }
    })
}


function pollMessages(){
    setInterval(getanddisplay,3000);
}









if(process.env.MODE==='poll'){
    getanddisplay();
    pollMessages();
}else if( process.env.MODE ==='stream')
   {
        getanddisplay();
        StreamMessages(); 
    
}