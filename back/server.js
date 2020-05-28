const express = require("express");
const serveIndex = require("serve-index");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/ws/now", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.use(express.static("public"));
app.use(serveIndex("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
