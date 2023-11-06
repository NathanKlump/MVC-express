const mysql = require('mysql2');
const { db } = require('../config/databaseConnection');
const { getCoordinates } = require('../services/FindCoords');

const IncidentsModel = {
  createIncident: (incidentData, callback) => {

    getCoordinates(incidentData)
      .then(coords => {
        incidentData.latitude = coords.lat;
        incidentData.longitude = coords.lon;
        
        db.query(
          'INSERT INTO Incidents (INCI_DESCRIPTION, INCI_DATE, INCI_CATEGORY, INCI_SUB_CATEGORY, INCI_PLACE_CITY_DISTRICT, INCI_STATE_UT, INCI_SOURCE, INCI_NAME, Latitude, Longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
          [
            incidentData.INCI_DESCRIPTION,
            incidentData.INCI_DATE,
            incidentData.INCI_CATEGORY,
            incidentData.INCI_SUB_CATEGORY,
            incidentData.INCI_PLACE_CITY_DISTRICT,
            incidentData.INCI_STATE_UT,
            incidentData.INCI_SOURCE,
            incidentData.INCI_NAME,
            incidentData.latitude,
            incidentData.longitude
          ],
          (error, results) => {
            if (error) {
              callback(error, null);
            } else {
              callback(null, results.insertId);
            }
          }
        );
      })
      .catch(error => {
        console.error("Failed to get coordinates or insert incident:", error);
        callback(error, null);
      });
  },
};

module.exports = IncidentsModel;
