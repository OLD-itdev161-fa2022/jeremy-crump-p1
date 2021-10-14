import express from 'express';
import connectDatabase from './config/db';
import {check, validationResult} from 'express-validator';

//Init express
const app = express();

//connect to MongoDB
connectDatabase();

// Configure Middleware to parse json
app.use(express.json({ extended: false}));

//API Endpoints
/** 
 * @route GET /
 * @desc Test endpoint
*/

app.get('/', (req, res) =>
    res.send('Get request sent to API')
);
/**
 * @route POST api/user  
 * @desc Register user
 */
app.post('/api/user',
[
    check('name', 'Please enter your name')
    .not()
    .isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
        'password',
         'Please enter a password with 3 or more characters'
        )
        .isLength({min: 3})
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array()});
    } else {
        return res.send(req.body);
    }
});

//Listener
const port = 5000;
app.listen(port,()=> console.log(`Express server running on ${port}`));