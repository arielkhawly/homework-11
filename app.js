let fs = require('fs');
let express = require('express');
let app = express();
let PORT = 3000;

//ROUTES



app.get('/notes', function(req, res) {

});
app.get('*', function (req, res){

});
//API ROUTES
app.get('/api/notes', function (req, res){

});
app.post('/api/notes', function (req, res){

});
app.delete('/api/notes/:id', function (req, res){

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });