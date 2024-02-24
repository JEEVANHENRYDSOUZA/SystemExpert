const database={
    ['index.html']:'<html>hello world</html>'
}



module.exports.get=(key,callback)=>{
    setTimeout(()=>{
        callback(database[key])
    },3000)
}