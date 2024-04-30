import { config } from "dotenv";
import cookieParser from "cookie-parser";
import express from "express";
// import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 3000;

config();

// app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

server.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server running on: http://localhost:${PORT}`);
});
