const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

require("./lentille.model.js");
const Lentille = mongoose.model("lentilles");
const url = process.env.MONGO_URL || "mongodb://mongo:27017/lentille";
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with LentilleService");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("This is lentille service");
});

app.post("/lentille", (req, res) => {
  const lentille = new Lentille(req.body);
  lentille
    .save()
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(400).send("Something went wrong");
      }
    })
    .catch((err) => {
      res.send(err.message);
    });
});

app.get("/lentilles", (req, res) => {
  Lentille.find()
    .then((lentilles) => {
      if (lentilles) {
        res.status(200).send(lentilles);
      } else {
        res.status(404).send("No lentilles found");
      }
    })
    .catch((err) => res.send(err.message));
});

app.get("/lentille/:id", (req, res) => {
  Lentille.findById(req.params.id)
    .then((lentille) => {
      if (lentille) {
        res.status(200).send(lentille);
      } else {
        res.status(404).send("No lentille found");
      }
    })
    .catch((err) => res.send(err.message));
});

app.delete("/lentille/:id", (req, res) => {
  Lentille.findByIdAndDelete(req.params.id)
    .then((lentille) => {
      if (lentille) {
        res.status(200).send(lentille);
      } else {
        res.status(404).send("No lentille found");
      }
    })
    .catch((err) => res.send(err.message));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running lentille service");
});
