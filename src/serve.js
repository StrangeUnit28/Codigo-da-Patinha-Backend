import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.js";

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT;

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`rodando server na url: http://localhost:${PORT}/`);
});
