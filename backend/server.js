import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 3000;

config();

app.use(express.json()); // for parsing application/json

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server running on: http://localhost:${PORT}`);
});
