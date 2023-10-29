const express = require("express");
const routerFeedback = express.Router();
//step1:extract table
const { user_feedback } = require("../models");

routerFeedback.get("/", async (req, res) => {
  const listOffeedback = await user_feedback.findAll();
  res.json(listOffeedback);
});

routerFeedback.post("/", async (req, res) => {
  //step2:afte write request, extract json
  const feedback = req.body;
  //step3:into database
  await user_feedback.create(feedback);
  res.json(feedback);
});

module.exports = routerFeedback;
