const express = require('express');
const {PORT} = require( './config/serverConfig');

const app = express();

const  setupAndStartServer = async() => {
    
    app.listen(PORT,()=>{
        console.log(`server is  started at ${PORT}`);
        
    })
}

setupAndStartServer();