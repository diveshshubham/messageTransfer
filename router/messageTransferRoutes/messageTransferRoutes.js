const express = require("express");
const router = express.Router();
const controller = require("../../controller/index");

//this route will let user to post and date time when he/she wants to migrate message
let routes = (app) => {
  router.get("/transferMessage", controller.messageTransferController.messageTransfer);
  app.use(router);
};

module.exports = routes;