const express = require("express");
const routerReport = express.Router();
//step1:extract table
const { user_report } = require("../models");

routerReport.get("/", async (req, res) => {
  const listOfreport = await user_report.findAll();
  res.json(listOfreport);
});

routerReport.post("/", async (req, res) => {
  //step2:afte write request, extract json
  const report = req.body;
  //step3:into database
  await user_report.create(report);

  res.json(report);
});

module.exports = routerReport;
