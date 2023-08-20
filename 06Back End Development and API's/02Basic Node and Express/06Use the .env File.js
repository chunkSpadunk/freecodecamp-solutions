let express = require('express');
let app = express();
console.log('Hello World');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.use('/public', express.static(__dirname + '/public'));
/* the file delivery should go through the public route so the above method will be the correct approach */
// app.get('/json', (req, res) => {
//     res.json({
//         message: 'Hello json',
//     });
// });
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

module.exports = app;
