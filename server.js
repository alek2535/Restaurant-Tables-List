// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

const express = require("express");
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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});