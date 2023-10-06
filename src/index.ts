import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import dbConnect from './db';
dotenv.config();

const app: Express = express();
const port = 3200;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static("uploads"))
app.use("/api/v1", require("./router/index"))
app.listen(port, async () => {
  await dbConnect().then((e) => console.log("Db Connected..."))
    .catch(err => console.log(err));

  // await Student.insertMany(ts);
  console.log(`[server]: Server is running at http://localhost:${port}`);
});