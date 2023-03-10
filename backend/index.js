const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

const routes = require("./routes/routes.js");

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
