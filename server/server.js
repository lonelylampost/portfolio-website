const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const Schema = mongoose.Schema;

require('dotenv').config()

const mongoDb = (process.env.MONGO_URI)
let PORT = (process.env.PORT)

mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const Project = mongoose.model(
  "Projects",
  new Schema({
    title: { type: String },
    types: { type: Array },
    description: { type: Array },
    image: { type: String },
    alt: { type: String },
    link: { type: String },
    github: { type: String },
  })
);

app.get("/api", (req, res) => {  
    Project.find({}).exec(async function (err, projects) {
      if (err) {
        console.log(err)
        return res.status(404).send('Server error!')
      }
      return await res.json({projects})
})})

app.listen(PORT, () => console.log("app running!"));