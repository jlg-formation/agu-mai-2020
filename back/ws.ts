import express from "express";

const app = express.Router();
export const ws = app;

app.get("/now", (req, res) => {
  res.json({
    date: new Date(),
  });
});
