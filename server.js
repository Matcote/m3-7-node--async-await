"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { handleJoke } = require("./handlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set("view engine", "ejs")

  // endpoints
  .get("/joke/:type", (req, res) => {
    if (
      req.params.type === "dad" ||
      req.params.type === "tronald" ||
      req.params.type === "geek"
    ) {
      handleJoke(req.params.type).then((joke) => {
        res.status(200).send(joke);
      });
    } else {
      res.status(400).send("unrecognized test joke");
    }
  })
  .get("/make-me-laugh", (req, res) => {
    let whichJoke = Math.floor(Math.random() * 3);
    if (whichJoke === 0) {
      handleJoke("dad").then((joke) => {
        res.status(200).send(joke);
      });
    } else if (whichJoke === 1) {
      handleJoke("tronald").then((joke) => {
        res.status(200).send(joke);
      });
    } else if (whichJoke === 2) {
      handleJoke("geek").then((joke) => {
        res.status(200).send(joke);
      });
    }
  })

  .listen(8000, () => console.log(`Listening on port 8000`));
