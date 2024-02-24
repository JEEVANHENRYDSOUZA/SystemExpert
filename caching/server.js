const express = require("express")
const database=require("./app")
// import express function which is a top level function 
const app = express()
const fs = require('fs');
const cache={};

app.use(express.json());

const hashTable={}

app.use(express.json())
app.get("/nocache/index.html", (req, res) => {
  database.get('index.html',page=>{
    res.send(page);
  })
})


app.get('/withcache/index.html',(req,res)=>{
      if('index.html' in cache){
        res.send(cache['index.html'])
        return;
      }


      database.get('index.html', page=>{
        cache['index.html']=page;
        res.send(page);
      })
})






app.listen(5500, () => console.log("Server Started"))