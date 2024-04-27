import express from "express";
import { config } from "dotenv";
const app = express();

config();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, console.log(`Server running on: http://localhost:${PORT}`));
