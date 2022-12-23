const express = require('express');
const router = express.Router();
const dbIndex = require("../db/dbIndex")

// Universally Unique Identifier - handy tool for ID numbers found in expressjs tutorial 
const uuid = require('uuid');

// GET route for notes
  router.get('/api/notes', async (req, res) => {
    const notes = await DB.readNote();
    return res.json(notes);
  });

// POST route for new note 
  router.post('/api/notes', async (req, res) => {
    const currentNotes = await DB.readNote();
    let newNote = {
      id: uuid(),
      title: req.body.title,
      text: req.body.text,
    };
  
    await DB.addNote([...currentNotes, newNote]);
  
    return res.send(newNote);
  });

// DELETE a note 
router.delete('/api/notes/:id', async (req, res) => {
    // separates out the note to delete based on id
    const noteToDelete = req.params.id;
    // notes already in json file
    const currentNotes = await DB.readNote();
    // sort through notes file and create a new array minus the note in question
    const newNoteData = currentNotes.filter((note) => note.id !== noteToDelete);
  
    // sends the new array back to the DB class 
    await DB.deleteNote(newNoteData);
  
    return res.send(newNoteData);
  });

module.exports = router;