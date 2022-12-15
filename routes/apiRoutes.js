// Get Routes to HTML
const path = require("path");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

// get or show all notes
router.get('/notes', (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(401).json(err));
});

// create new notes with unique id
  router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
  });  
// function to delete note by id
  router.delete("/notes/:id" , (req, res) => {
    const params = req.params.id
    updateDb(params, notes);
    res.redirect('');
  });


module.exports = router;

