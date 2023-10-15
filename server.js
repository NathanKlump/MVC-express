const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // If you have static files

// Routes
const IncidentController = require('./controllers/IncidentController');
app.use('/incidents', IncidentController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
