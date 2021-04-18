const express = require('express');
const path = require('path');
const app = express();

// middlewares
app.use('/',express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'public','commingSoon.html'));
});


app.listen(5000,()=>{
    console.log('server running on port 5000');
})