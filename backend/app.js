import express from "express";
import routes from "./routes.js";

const app = express();

app.use("/api", routes);

app.listen(9090, () => {
  console.log("Servidor rodando na porta 9090");
});
