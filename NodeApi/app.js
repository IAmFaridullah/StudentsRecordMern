const express =  require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');

const MongoDb_URI = 'mongodb+srv://iamfaridullah:srwatson33@cluster0.u6woc.mongodb.net/institution?retryWrites=true&w=majority'

const routes = require('./routes/routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes)

mongoose.connect(MongoDb_URI)
        .then(
            app.listen(5000, () => {
                console.log('Server listening to requests on port 5000...')
            })
        ).catch((err) => {
            console.log(err);
        })



