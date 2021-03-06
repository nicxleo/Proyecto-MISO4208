const Devices = require('../models/dispositivos');

//Create and Save a new Device
exports.create = async (strategyId, devices) => {
  console.log('***** Create Devices*****');
  try {
    devices.forEach((d) => {
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

// Retrieve all Devices from the database.
exports.findAll = async (filter) => {
  console.log('***** FindAll Devices *****');
  try {
    const devices = await Devices.findAll({
      where: filter,
      raw: true,
    });
    if (devices.length) {
      return devices;
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};
