// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

const express = require("express");
<<<<<<< HEAD
=======
const { table } = require("console");
>>>>>>> master
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Table Reservation (DATA)
//
// =============================================================
const table = [
  { name:"",
    phoneNumber:"",
    email:"",
    uniqueID:"",
  }
]
const waitingList = [
  { name:"",
    phoneNumber:"",
    email:"",
    uniqueID:"",
  }
]
// API Routes
// =============================================================

// GET 
app.get("/api/table", function(req, res) {
    res.json(table);
  });

  app.get("/api/waitingList", function(req, res) {
    res.json(waitingList);
  });


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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});