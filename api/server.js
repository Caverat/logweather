var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    WeatherLog = require('./models/weatherLogModel'),
    Sensor = require('./models/sensorModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var dev_db_url = 'mongodb://localhost/WeatherLogDB';
var db_url = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(db_url, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var weatherLogRoutes = require('./routes/weatherLogRoutes');
weatherLogRoutes(app);

var sensorRoutes = require('./routes/sensorRoutes');
sensorRoutes(app);

app.listen(port);

console.log('WeatherLogService API server started on: ' + port);