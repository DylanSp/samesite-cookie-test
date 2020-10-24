import express from "express";
import path from "path";

const app = express();
const port = 3000;

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));

app.post("/setCookies", (req, res) => {
  res.cookie("myCookie", "peanutButter", {
    httpOnly: true,
    sameSite: "strict"
  });
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
