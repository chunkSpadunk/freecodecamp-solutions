let express = require('express');
let app = express();
console.log('Hello World');
let bodyParser = require('body-parser');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
/* the file delivery should go through the public route so the above method will be the correct approach */
// app.get('/json', (req, res) => {
//     res.json({
//         message: 'Hello json',
//     });
// });
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/json', (req, res) => {
    if (process.env['MESSAGE_STYLE'] === 'uppercase') {
        res.json({
            message: 'HELLO JSON',
        });
    } else {
        res.json({
            message: 'Hello json',
        });
    }
});
app.get(
    '/now',
    (req, res, next) => {
        req.time = new Date().toString();
        next();
    },
    (req, res) => {
        res.send({
            time: req.time,
        });
    }
);
app.get('/:word/echo', (req, res) => {
    const { word } = req.params;
    res.json({
        echo: word,
    });
});
app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    var { first: firstName, last: lastName } = req.query;
    res.json({
        name: `${firstName} ${lastName}`,
    });
});
app.post('/name', (req, res) => {
    var string = req.body.first + ' ' + req.body.last;
    res.json({ name: string });
});

module.exports = app;
