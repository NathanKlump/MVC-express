const mysql = require('mysql2');
const { db } = require('../config/databaseConnection');

const IncidentsModel = {
    createIncident: (incidentData, callback) => {

      db.query(
        'INSERT INTO Incidents (IncidentDate, Category, SubCategory, Location, State, Source, Name) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          incidentData.IncidentDate,
          incidentData.Category,
          incidentData.SubCategory,
          incidentData.Location,
          incidentData.State,
          incidentData.Source,
          incidentData.Name
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