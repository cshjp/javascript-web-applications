const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const model = new NotesModel();
const view = new NotesView(model);

model.addNote('Example Note');

view.displayNotes();

console.log(model.getNotes());

console.log('The notes app is running!')