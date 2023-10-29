const express = require("express");
const app = express();
const db = require("./models");

const cors = require("cors");
app.use(express.json());
app.use(cors());

const routerReport = require("./routes/user_report");
const routerFeedback = require("./routes/user_feedback");
app.use("/report", routerReport); //web name is report
app.use("/feedback", routerFeedback);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("listning to 3001...");
  });
});
