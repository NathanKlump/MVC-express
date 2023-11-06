// const mysql = require('mysql2');
const { db } = require('../config/databaseConnection');

const IncidentsModel = {
    createIncident: (incidentData, callback) => {

      db.query(
        'INSERT INTO Incidents (Description, date, Category, SubCategory, City, State, Source, Name) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          incidentData.INCI_DESCRIPTION,
          incidentData.INCI_DATE,
          incidentData.INCI_CATEGORY,
          incidentData.INCI_SUB_CATEGORY,
          incidentData.INCI_PLACE_CITY_DISTRICT,
          incidentData.INCI_STATE_UT,
          incidentData.INCI_SOURCE,
          incidentData.INCI_NAME
        ],
        (error, results) => {
          if (error) {
            callback(error, null);
          } else {
            callback(null, results.insertId);
          }
        }
      );
    },
  };
  
  module.exports = IncidentsModel;