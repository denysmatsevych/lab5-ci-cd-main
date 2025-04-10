import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (req, res) => {
  try {
    // Assuming you're using mongoose
    if (mongoose.connection.readyState === 1) {
      res.status(200).json({ status: "OK", database: "connected" });
    } else {
      res.status(503).json({ status: "ERROR", database: "disconnected" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "ERROR", message: (error as Error).message });
  }
});

export default app;
