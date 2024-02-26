const express = require('express');
const app = express();

const PORT= process.env.PORT;

//app.use(express.json());
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

app.get('/',(req,res)=>{
    console.log(req.headers)
    res.send(`Redirected to port Numbr ${PORT}`);    
})

app.post('/',(req,res)=>{

    res.send("post request\n")

})