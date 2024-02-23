const express = require("express")
// import express function which is a top level function 
const app = express()
const fs = require('fs');


app.use(express.json());

const hashTable={}

app.use(express.json())
app.get("/", (req, res) => {
  res.send("Home Page")
})


app.post('/memory/:key',(req,res)=>{
hashTable[req.params.key] = req.body.data;
console.log(hashTable[req.params.key]);
  res.send();
})



app.get('/memory/:key',(req,res)=>{
  const key =req.params.key;
  if(key in hashTable){
    res.send(hashTable[key]);
    return  }
  res.send('null')
})

app.post('/',(req,res)=>{

  console.log(req.body);
  return(res.send(201));

})


app.post('/writeToFile', (req, res) => {
  const dataToWrite = req.body.data; // Assuming data is sent in the request body

  // Specify the file path (adjust the path as needed)
  const filePath = 'file/data.txt';

  // Write to the file
  fs.writeFile(filePath, dataToWrite, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error writing to file');
    } else {
      console.log('Data written to file successfully');
      res.status(200).send('Data written to file successfully');
    }
  });
});





app.listen(5500, () => console.log("Server Started"))