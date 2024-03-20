const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require( './config/serverConfig');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const  setupAndStartServer = async() => {
    
    app.listen(PORT,()=>{
        console.log(`server is  started at ${PORT}`);
        
        
    })
}

setupAndStartServer();