// install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/logweather'));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/dist/logweather/index.html');
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);