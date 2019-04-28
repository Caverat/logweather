'use strict';
module.exports = function(app){
    var sensor = require('../controllers/sensorController');

    app.route('/sensors')
        .get(sensor.list_all_sensors)
        .post(sensor.create_sensor);

    app.route('/sensors/:sensorId')
        .get(sensor.get_sensor)
        .put(sensor.update_sensor)
        .delete(sensor.delete_sensor);
};