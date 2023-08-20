let express = require('express');
let app = express();
console.log('Hello World');
app.use('/public', express.static(__dirname + '/public'));
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
module.exports = app;
