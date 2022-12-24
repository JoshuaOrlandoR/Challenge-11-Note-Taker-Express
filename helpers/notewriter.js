const fs = require('fs');
const path = require('path');

// Slightly rewritten version of previous code that incorporates promises - stack overflow suggestion that ended up working
const writeNewNote = async (body, notesStorage) => {
  const note = body;
  notesStorage.push(note);
  try {
    await fs.promises.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesStorage }, null, 2)
    );
    return note;
  } catch (error) {
    console.error(error);
  }
};

  
const deleteNote = (id, notes) => {
    let notesStorage = notes.filter(el => el.id != id);
// Re-indexes notesStorage so indexes start at 0 and are consecutive - taught from a youtube tutorial - don't quite grasp why this is 100% necessesary compared to the previous way I tried to to this but will probably make more sense moving forward
    let index = 0 
    notesStorage.forEach(note => {
        note.id = index;
        index += 1;
    });

// writeFile 
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesStorage}, null, 2)
    );
    return notesStorage;
}

module.exports = {
    writeNewNote, deleteNote
}


