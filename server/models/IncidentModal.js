const mysql = require('mysql2');
const { db } = require('../config/databaseConnection');

const IncidentsModel = {
    createIncident: (incidentData, callback) => {

      db.query(
        'INSERT INTO Incidents (Description, date, Category, SubCategory, State, Source, Name) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [
          incidentData.description,
          incidentData.date,
          incidentData.category,
          incidentData.subcategory,
          incidentData.state,
          incidentData.source,
          incidentData.name
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