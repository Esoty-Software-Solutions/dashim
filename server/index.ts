import express from "express";
import cors from "cors";
import { crudRouter } from "@routers/crud.router";

const app = express();
const PORT = 3000;

// enable cors
app.use(cors());

// File size limit
app.use(express.json({ limit: "350mb" }));
app.use(express.urlencoded({ extended: true, limit: "350mb" }));

app.use("/crud", crudRouter);

app.get("/", (req, res) => {
  res.send("Hello World from Express");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
