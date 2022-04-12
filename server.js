///////
///////Made by KENLIEPLAYS
//////
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT A MINUTE")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("WAIT A MINUTE")});
}
module.exports = keepAlive

///////
///////Made by KENLIEPLAYS
//////