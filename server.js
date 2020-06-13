// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var express = require("express");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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