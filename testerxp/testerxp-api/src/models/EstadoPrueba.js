const { Sequelize } = require('sequelize');
const sequelize = require('../database/database');

const estadoPrueba = sequelize.define(
  'estado_prueba',
  {
    id_estado: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: Sequelize.TEXT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = estadoPrueba;
