'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    sensorType: {
        type: String,
        enum: ['seaTemp', 'airTemp'],
    }
});

module.exports = mongoose.model('Sensor', SensorSchema);