import express from "express";
import { pizza } from "./routes/pizzaRouter.js";

const app = express();

app.use("/", pizza);

app.listen(3000, () => {
  console.log("Server started at port 3000...");
});
