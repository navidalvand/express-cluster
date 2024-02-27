const express = require("express");

const app = express();

app.get("/heavy", async (req, res) => {
  let number = 0;
  for (let ii = 0; ii < 1e9; ii++) {
    number++;
  }
  res.send(`some shi ${number}`);
});

app.listen(3000, (err) => {
  if (err) return console.log(err.message);
  console.log("server is running on port 3000");
});
