const router = require('express').Router();

const {writeNewNote, deleteNote} = require('../../helpers/notewriter');

let {notesArray} = require('../../helpers/notewriter');

//GET notes api 
router.get('/notes', (req, res) => {
    let output = notesArray;
    res.json(output);
});

//POST /notes
router.get('/notes', (req, res) => {
    if(notesArray) {
        req.body.id = notesArray.length.toString();
    } else {
        req.body.id = 0
    }
    res.json(writeNewNote(req.body, notesArray))
});

//DELETE params for /notes 
router.delete('notes/:id', async (req, res) => {
    const {id} = req.params
    notesArray = await deleteNote (id, notesArray);
    res.json(notesArray)
});

module.exports = router;
