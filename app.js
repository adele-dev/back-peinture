const express = require("express");
const app = express();
const connection = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

require("./routes")(app);

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log(
      "connected to database with threadId :  " + connection.threadId
    );
  }
});

const serverPort = process.env.PORT || 8000;
app.listen(serverPort, () => {
  console.log(`Server is listening port ${serverPort}`);
});
