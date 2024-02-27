const  axios= require('axios');
const express= require('express');


const SHARD_ADDRESS=['http://localhost:3000','http://localhost:3001'];
const SHARD_COUNT=SHARD_ADDRESS.length;

const app = express();
app.use(express.json());



function getShardendpoint(key){
    const shardNum=key.charCodeAt(0) % SHARD_COUNT;// hashing function determines an index in the shardadress array
    const shardadress=SHARD_ADDRESS[shardNum];
    // here we are updating the shardaddress of which is the element of the SHARD_ADDRESS of the array
    return `${shardadress}/${key}`;
}


app.post('/:key',(req,res)=>{
    const shardendpoint=getShardendpoint(req.params.key); 
    console.log(`${shardendpoint}`)      
    console.log(`forwarding requesto to ${shardendpoint}`);
    axios.post(shardendpoint,req.body).then(result=>{
        res.send();
    })
})

app.get('/:key',(req,res)=>{
    const shardendpoint=getShardendpoint(req.params.key);
    console.log(`Forwarding request to the shard number ${shardendpoint}`);


    axios.get(shardendpoint).then(result=>{
        if(result.data==='null'){
            result.send('null');
            return 
        }
        res.send(result.data);
    })
})



app.listen(8000,()=>{
    console.log('listening to port 8000');
})