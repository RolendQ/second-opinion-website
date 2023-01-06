const cors = require("cors");
const express = require("express");
const app = express();
const initRoutes = require("./routes");

var corsOptions = {
  origin: "http://localhost:3000"
};
// the React server's ip and host

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});