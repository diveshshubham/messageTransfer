const cors = require("cors");
const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())

global.__basedir = __dirname;
var corsOptions = {
  origin: "http://localhost:8089"
};
app.use(cors(corsOptions));
setInterval(()=>{
 
})

const route = require('./router/index');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.urlencoded({ extended: true }));

route.messageTransferRoutes(app);
route.postMessageRoutes(app);
route.defaultPage(app);

function initializeDatabaseConnection(){
  require('./database/mongo/connection')
}

initializeDatabaseConnection()

let port = process.env.PORT;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});