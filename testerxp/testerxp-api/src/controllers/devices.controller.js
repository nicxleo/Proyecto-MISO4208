const Devices = require('../models/dispositivos');

//Create and Save a new Device
exports.create = async (strategyId, devices) => {
  console.log('***** Create Devices*****');
  try {
    JSON.parse(devices).forEach((d) => {
      Devices.create({
        id_estrategia: strategyId,
        dispositivo: d,
      });
    });
    return true;
  } catch (e) {
    console.log(e);
    return null;
  }
};