import express from 'express';

const app = express();

//API Endpoint
app.get('/', (req, res)=>
    res.send('Get request sent to API')
);

//Listener
const port = 3000;
app.listen(port,()=> console.log(`Express server running on ${port}`));