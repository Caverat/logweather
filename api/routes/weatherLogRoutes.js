'use strict';
module.exports = function(app){
    var weatherLog = require('../controllers/weatherLogController');
   
    app.route('/sensors/:sensorId/weatherLogs')
        .get(weatherLog.get_weather_logs)
        .post(weatherLog.create_weather_log);

    app.route('/sensors/:sensorId/weatherLogs/:weatherLogId')
        .get(weatherLog.get_weather_log);
};