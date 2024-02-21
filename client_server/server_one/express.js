const express = require('express');
const app = express();

//app.use(express.json());
app.listen(5500,()=>{
    console.log("listening on port 5500")
})

app.get('/hello',(req,res)=>{
    console.log("hi")
    res.send("get Request\n");    
})

app.post('/hello',(req,res)=>{

    res.send("post request\n")

})

