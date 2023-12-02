require("dotenv").config();

const routes = require("./routes/routes");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const db = database.db;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

module.exports = db;

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

// app.use(cors({ credentials: true, origin: true }));
app.use("/api", routes);

// app.options("*", cors());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

// console.log("oii", getAll);
