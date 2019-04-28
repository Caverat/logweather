'use strict';

var mongoose = require('mongoose'),
    WeatherLog = mongoose.model('WeatherLog'),
    Sensor = mongoose.model('Sensor');

exports.get_weather_logs = function (req, res) {
    WeatherLog.find({sensorId: req.params.sensorId }, function (err, weatherLogs) {
        if (err)
            res.send(err);
        res.json(weatherLogs);
    });
};

exports.create_weather_log = function (req, res) {
    Sensor.findById(req.params.sensorId, function(err, sensor) {
        if(err)
            res.status(422).send(err);
        else if(!sensor)
            res.status(404).send();
        else{
            req.body.sensorId = mongoose.Types.ObjectId(req.params.sensorId);
            var new_weather_log = new WeatherLog(req.body);
            new_weather_log.save(function (err, weatherLog) {
                if (err)
                    res.status(422).send(err);
                else {
                    res.set({ 'Location': '/sensors/' + weatherLog.sensorId + '/weatherLogs/' + weatherLog._id });
                    res.status(201).json(weatherLog);
                }
            });
        }
    });
};

exports.get_weather_log = function (req, res) {
    WeatherLog.findOne({sensorId: req.params.sensorId, _id: req.params.weatherLogId},
        function(err, weatherLog){
            if(err)
                res.send(err);
            else if(!weatherLog)
                res.status(404).send();
            else
                res.json(weatherLog);
        });
};