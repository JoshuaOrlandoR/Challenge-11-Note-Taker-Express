const fs = require('fs');
const path = require('path');

const writeNewNote = async (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    try {
      await fs.promises.writeFile(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
      );
      return note;
    } catch (error) {
      console.error(error);
    }
  };
  
const deleteNote = (id, notes) => {
    let notesArray = notes.filter(el => el.id != id);
// Re-indexes notesArray so indexes start at 0 and are consecutive - taught from a youtube tutorial - don't quite grasp why this is 100% necessesary compared to the previous way I tried to to this but will probably make more sense moving forward
    let index = 0 
    notesArray.forEach(note => {
        note.id = index;
        index += 1;
    });

// writeFile 
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JOSN.stringify({notesArray}, null, 2)
    );
    return notesArray;
}

module.exports = {
    writeNewNote, deleteNote
}


