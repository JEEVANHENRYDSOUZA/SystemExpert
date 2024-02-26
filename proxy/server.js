const express = require('express');
const app = express();

//app.use(express.json());
app.listen(5500,()=>{
    console.log("listening on port 5500")
})

app.get('/',(req,res)=>{
    console.log(req.headers)
    res.send("Re-directed to nginx\n");    
})

app.post('/',(req,res)=>{

    res.send("post request\n")

})
