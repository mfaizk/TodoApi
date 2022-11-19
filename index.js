const app = require("./app");
require("dotenv").config();
require("./config/db")();
app.listen(3000, () => {
  console.log("Server Started");
});
