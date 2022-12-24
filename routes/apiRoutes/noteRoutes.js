const router = require('express').Router();

const {writeNewNote, deleteNote} = require('../../helpers/notewriter');

let {notesStorage} = require ('../../db/db.json'); 

//GET notes api 
router.get('/notes', (req, res) => {
    let output = notesStorage;
    res.json(output);
});

//POST for /notes - THIS WAS A GET REQUEST FOR SO LONG - BIG SOURCE OF ISSUES 
router.post('/notes', (req, res) => {
  console.log(notesStorage);
    if(notesStorage) {
        req.body.id = notesStorage.length.toString();
    } else {
        req.body.id = 0
    }
    res.json(writeNewNote(req.body, notesStorage))
});

//DELETE params for /notes --> rewritten with a catch for errors - helped me figure out why delete wasnt working 
router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params;
    try {
      notesStorage = await deleteNote(id, notesStorage);
      res.json(notesStorage);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });
  

module.exports = router;
