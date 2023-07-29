import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import routes from "./routes";

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(expressLayouts);
app.use(express.json());

// routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
