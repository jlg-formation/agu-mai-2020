import express from "express";
import serveIndex from "serve-index";

import { ws } from "./ws";

const app = express();
const port = 3000;

// log the url
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use("/ws", ws);

app.use(express.static("public"));
app.use(serveIndex("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
