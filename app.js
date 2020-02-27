let fs = require('fs');
let express = require('express');
let path = require("path");
let app = express();
let dbPath = path.join(__dirname, "db", "db.json");
let notes = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

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
    newNote.id = notes.length + 1;
    notes.push(newNote);
    fs.writeFileSync(dbPath, JSON.stringify(notes));
    res.json(newNote);
});
app.delete('/api/notes/:id', function (req, res) {
    let deletionId = req.params.id;
    notes = notes.filter(note => note.id !== deletionId);
    fs.writeFileSync(dbPath, JSON.stringify(notes));
    res.json(notes);

});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});