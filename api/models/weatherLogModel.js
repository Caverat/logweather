'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WeatherLogSchema = new Schema({
    sensorId: {
        type: Schema.Types.ObjectId        
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    logType: {
        type: String,
        enum: ['seaTemp','airTemp'],        
        default: 'airTemp'
    },
    value: {
        type: Number
    }
});

module.exports = mongoose.model('WeatherLog', WeatherLogSchema);