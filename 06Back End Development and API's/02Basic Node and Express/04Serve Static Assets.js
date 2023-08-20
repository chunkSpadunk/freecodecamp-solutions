let express = require('express');
let app = express();
console.log('Hello World');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.use('/public', express.static(__dirname + '/public'));
/* the file delivery should go through the public route so the above method will be the correct approach */

module.exports = app;
