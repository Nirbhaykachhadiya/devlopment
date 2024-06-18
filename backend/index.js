import express from "express";

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("hii there");
});

app.listen(port, () => {
  console.log(`your app is running on port ${port}`);
});
