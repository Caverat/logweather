'use strict';

var mongoose = require('mongoose'),
    Sensor = mongoose.model('Sensor'),
    WeatherLogs;

mongoose.set('useFindAndModify', false);

exports.list_all_sensors = function (req, res) {
    Sensor.find({}, function (err, sensor) {
        if (err)
            res.send(err);
        res.json(sensor);
    });
};

exports.create_sensor = function (req, res) {
    var new_sensor = new Sensor(req.body);
    new_sensor.save(function (err, sensor) {
        if (err)
            res.status(422).send(err);
        else {
            res.set({ 'Location': '/sensors/' + sensor._id });
            res.status(201).send();
        }
    });
};

exports.get_sensor = function (req, res) {
    Sensor.findById(req.params.sensorId, function (err, sensor) {
        if (err)
            res.send(err);
        res.json(sensor);
    });
};

exports.update_sensor = function (req, res){
    Sensor.findByIdAndUpdate(req.params.sensorId, {
        name: req.body.name,
        description: req.body.description,
        sensorType: req.body.sensorType
    }, {new: true}, function (err, sensor){
        if(!sensor) {
            return res.status(404).send({
                message: "Could not find sensor with id: " + req.params.sensorId 
             });
        }
        res.status(200).send();
    });
};

exports.delete_sensor = function(req, res){
    // Should probably also delete connected weather logs here
    Sensor.findByIdAndDelete(req.params.sensorId, function(err, sensor){
        if(!sensor) {
            return res.status(404).send();
        }
        res.status(200).send();
    });
};