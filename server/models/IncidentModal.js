const mysql = require('mysql2');

const IncidentsModel = {
    createIncident: (incidentData, callback) => {
      pool.query(
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