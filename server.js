import express from 'express';
import connectDatabase from './config/db';

//Init express
const app = express();

//connect to MongoDB
connectDatabase();

//API Endpoint
app.get('/', (req, res)=>
    res.send('Get request sent to API')
);

//Listener
const port = 3000;
app.listen(port,()=> console.log(`Express server running on ${port}`));