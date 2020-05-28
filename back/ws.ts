import express from "express";

const app = express.Router();
export const ws = app;

app.get("/now", (req, res) => {
  res.json({
    date: new Date(),
  });
});

app.get("/articles", (req, res) => {
  res.json([
    { name: "Tournevis", price: 12.23, qty: 5 },
    { name: "Marteau", price: 5.6, qty: 11 },
    { name: "Scie", price: 34.7, qty: 3 },
    { name: "Pince coupante", price: 10.99, qty: 3 },
  ]);
});
