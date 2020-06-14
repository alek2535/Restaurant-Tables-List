// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// const { table } = require("console");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservation (DATA)
// =============================================================
const table = [
  // { name:"",
  //   phoneNumber:"",
  //   email:"",
  //   uniqueID:"",
  // }
]
const waitingList = [
  // { name:"",
  //   phoneNumber:"",
  //   email:"",
  //   uniqueID:"",
  // }
]
// API Routes
// =============================================================

// GET 
app.get("/api/table", (req, res) => res.json(table));

app.get("/api/waitingList", (req, res) => res.json(waitingList));


// POST

app.post("/api/table", (req, res) => {
  const newTable = req.body;

  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  table.push(newTable);

  res.json(newTable);
});

app.post("/api/waitingList", (req, res) => {
  const waitingTable = req.body;

  waitingTable.routeName = waitingTable.name.replace(/\s+/g, "").toLowerCase();

  waitingList.push(waitingTable);

  res.json(waitingTable);
});

// HTML Routes
// =============================================================

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/Make.html"));
});

app.get("/waitingList", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/View.html"));
});

// default to home
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/Home.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => console.log("App listening on PORT: " + PORT));