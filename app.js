let fs = require('fs');
let express = require('express');
let path = require("path");
let app = express();
let PORT = 3000;
let notes = fs.readFileSync('./db/db.json', 'utf8')

//ROUTES - user sees these!
app.get('/notes', function (req, res) {
    return res.sendFile(path.join(__dirname, "public", "notes.html")
    )
});
app.get('*', function (req, res) {
    return res.sendFile(path.join(__dirname, "public", "index.html"))
});
//API ROUTES - the backend ! 
app.get('/api/notes', function (req, res) {
    return res.json(notes);
});
app.post('/api/notes', function (req, res) {
 let newNote = req.body;
 notes.push(newNote);
});
app.delete('/api/notes/:id', function (req, res) {

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});