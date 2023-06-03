import express from 'express';
import morgan from 'morgan';
import route from './routing/routing.js';

const app = express();
const port = process.env.PORT || 3001;


// server 
app.listen(port, () => {
    console.log('Servier started');
});

//middel wear
app.set('view engine', 'ejs')
app.use(morgan('dev'));
app.use(express.static('puplic'));
app.use('/', express.json());
app.use(express.urlencoded({ extended: false }));

const jsonParserMiddleware = async (req, res, next) => {
    if (!req.body || typeof req.body !== 'string') {
        next();
        return;
    }
    try {
        req.body = JSON.parse(req.body);
        next();
    } catch (e) {
        res.sendStatus(400).json({ msg: 'Invalid data.' });
    }
};

app.use(jsonParserMiddleware);


// routeing 
app.use('/', route);
// error response
app.use((req, res) => {
    res.send('Error404???', 404);
});

