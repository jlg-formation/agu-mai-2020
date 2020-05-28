import express from "express";
// import cors from "cors";

const app = express.Router();
export const ws = app;

// app.use(cors());

app.use(express.json());

app.get("/now", (req, res) => {
  res.json({
    date: new Date(),
  });
});

const articles = [
  { id: "a1", name: "Tournevis", price: 12.23, qty: 5 },
  { id: "a2", name: "Marteau", price: 5.6, qty: 11 },
  { id: "a3", name: "Scie", price: 34.7, qty: 3 },
  { id: "a4", name: "Pince coupante", price: 10.99, qty: 3 },
];

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.delete("/articles/:id", (req, res) => {
  const id = req.params.id;
  const index = articles.findIndex((a) => a.id === id);
  if (index === -1) {
    res.status(404).end();
    return;
  }
  articles.splice(index, 1);
  res.status(204).end();
});

app.delete("/articles-bulk", (req, res) => {
  const ids = req.body;
  for (const id of ids) {
    const index = articles.findIndex((a) => a.id === id);
    if (index === -1) {
      continue;
    }
    articles.splice(index, 1);
  }
  res.status(204).end();
});
