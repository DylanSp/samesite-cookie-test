import express from "express";
import path from "path";
import cookieParser from "cookie-parser";

const app = express();
const port = 3001;

const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.use(cookieParser());

app.get("/check", (req, res) => {
  if (req.cookies.myCookie) {
    res.sendStatus(204);
  } else {
    res.sendStatus(401);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
