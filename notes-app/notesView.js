class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    document.querySelector('#show-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value
      this.addNewNote(newNote);
   });
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    document.querySelectorAll('div.note').forEach(note => {
      note.remove()
    })
    document.querySelector('#note-input').value = ''
    this.displayNotes()
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach(note => {
      const paragraph = document.createElement('div');
      paragraph.className = 'note'
      paragraph.textContent = note
      this.mainContainerEl.append(paragraph);
    })
  }

  displayNotesFromApi() {
    return this.client.loadNotes()
    .then((data) => this.model.setNotes(data))
    // .then(() => console.log(data))
    .then(() => this.displayNotes())
  }
}

module.exports = NotesView;
