const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


// These Method is used to Get data and cookie from frontend
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const port = process.env.port || 3001;

// Configure ENV Files & Require Connection file
dotenv.config({path: './config.env'});
require('./db/connect');

const routerUser = require('./router/user.router');
app.use('/api', routerUser);

app.listen(port, ()=>{
    console.log(`Server running on http://localhost:${port}`)
})