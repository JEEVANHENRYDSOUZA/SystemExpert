const express = require('express');
const app = express();
const fs = require('fs');
const PORT=process.env.PORT;
const DTA_DIR= process.env.DTA_DIR;

app.use(express.json());


app.get('/:key',(req,res)=>{
    const {key} = req.params; //storing the parameter in the url
    const destination_file=`${DTA_DIR}/${key}`;
    // we are splitting the path as the data_dir will be the name of the directory 
    // key will be the file inside that directory 
    console.log(`the retreived key is ${key}`);
    try{
        const data=fs.readFileSync(destination_file);
        res.send(data); 
    }catch(e){
        res.send('null')
    }
    

})

app.post('/:key',(req,res)=>{
    console.log("post");
    const {key} = req.params;
    console.log(`storing key at ${key}`);
    const destination_file=`${DTA_DIR}/${key}`;
    // we are splitting the path as the data_dir will be the name of the directory 
    // key will be the file inside that directory 
    fs.writeFileSync(destination_file,req.body.data);
    res.send("write completed sucessfully");
})

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})