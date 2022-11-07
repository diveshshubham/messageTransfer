const express = require("express");
const router = express.Router();
const controller = require("../../controller/index");

//assume this route to be called every minute by scheduler(CRON Job) and then same will be inserte in db
let searchRoutes = (app) => {
  router.post("/postMessage", controller.messagePostController.postMessage);
  app.use(router);
};

module.exports = searchRoutes;