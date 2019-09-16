const mongoose = require('mongoose');
const express = require("express");
const app = express();

const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

const bodyParser = require('body-parser');
// this is middleware for body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World! We're about to connec to MongooseDB!"));
// this is where we import the routes
app.use("/api/users", users);
app.use("/api/posts", posts);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));