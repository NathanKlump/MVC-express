const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { connect, disconnect } = require('./config/databaseConnection');

connect();

app.use(express.json());
app.use(express.static('public')); // If you have static files

// Routes
const IncidentController = require('./controllers/IncidentController');
app.use('/incidents', IncidentController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on('SIGINT', () => {
  disconnect();
  process.exit(0);
});