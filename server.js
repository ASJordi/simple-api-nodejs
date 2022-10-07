const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = process.env.PORT || 3000;
const whiteList = "http://localhost:5000";
const VOCABULARY = __dirname + "/vocabulary/";

app = express();
app.use(
  cors({
    origin: whiteList,
  })
); 

app.use(express.json());

function openFileText(file) {
  const data = fs.readFileSync(VOCABULARY + file, "utf-8");
  let words = data.split(/\n/).map((word) => word.trim());
  return words;
}

const NOUNS = openFileText("nouns.txt");
const VERBS = openFileText("verbs.txt");
const ADJECTIVES = openFileText("adjectives.txt");
const ADVERBS = openFileText("adverbs.txt");

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the API",
    endpoints: {
      getNouns: "/nouns",
      getVerbs: "/verbs",
      getAdjectives: "/adjectives",
      getAdverbs: "/adverbs",
    },
    examples:{
      getNouns: "/nouns?start=e&end=t",
      getVerbs: "/verbs?end=uy",
      getAdjectives: "/adjectives?start=bi",
      getAdverbs: "/adverbs?start=o&end=ht",
      setLimit: "/nouns?start=e&end=t&limit=5",
    }
  });
});

// Endpoints

app.get("/nouns", (req, res) => {
  let start = req.query.start || "";
  let end = req.query.end || "";
  let limit = req.query.limit || 100;
  let regexp = new RegExp(`^${start}[a-zA-Z]*${end}$`);
  let matches = NOUNS.filter((word) => word.match(regexp)).slice(0, limit);
  res.json({
    matches,
    count: matches.length,
  });
});

app.get("/verbs", (req, res) => {
  let start = req.query.start || "";
  let end = req.query.end || "";
  let limit = req.query.limit || 100;
  let regexp = new RegExp(`^${start}[a-zA-Z]*${end}$`);
  let matches = VERBS.filter((word) => word.match(regexp)).slice(0, limit);
  res.json({
    matches,
    count: matches.length,
  });
});

app.get("/adjectives", (req, res) => {
  let start = req.query.start || "";
  let end = req.query.end || "";
  let limit = req.query.limit || 100;
  let regexp = new RegExp(`^${start}[a-zA-Z]*${end}$`);
  let matches = ADJECTIVES.filter((word) => word.match(regexp)).slice(0, limit);
  res.json({
    matches,
    count: matches.length,
  });
});

app.get("/adverbs", (req, res) => {
  let start = req.query.start || "";
  let end = req.query.end || "";
  let limit = req.query.limit || 100;
  let regexp = new RegExp(`^${start}[a-zA-Z]*${end}$`);
  let matches = ADVERBS.filter((word) => word.match(regexp)).slice(0, limit);
  res.json({
    matches,
    count: matches.length,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}...`));