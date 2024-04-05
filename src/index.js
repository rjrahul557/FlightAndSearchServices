const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require( './config/serverConfig');

const apiRoutes = require('./routes/index');

const db = require('./models/index');
//const {Airplane} = require('./models/index');


const app = express();
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

const  setupAndStartServer = async() => {
    
    app.listen(PORT,async()=>{
        console.log(`server is  started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    });
}

setupAndStartServer();