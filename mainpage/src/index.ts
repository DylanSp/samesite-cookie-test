import express from "express";
import path from "path";

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.get("/test", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
