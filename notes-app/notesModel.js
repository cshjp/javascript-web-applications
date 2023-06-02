class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
  }

  reset() {
    this.notes = [];
  }

  setNotes(incoming_notes) {
    console.log(incoming_notes);
    incoming_notes.forEach(note => {
      this.notes.push(note);
    })
  }
}

module.exports = NotesModel;
