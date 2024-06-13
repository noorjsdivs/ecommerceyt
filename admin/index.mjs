import express from "express";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import { readdirSync } from "fs";

// Routers

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamic routing

const routeFiles = readdirSync("./routes");
routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);

  app.use("/", routeModule.default);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
