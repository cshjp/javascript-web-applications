class NotesView {
  constructor(model) {
    this.model = model;
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
      paragraph.innerText = note
      paragraph.className = 'note'
      this.mainContainerEl.append(paragraph);
    })
  }
}

module.exports = NotesView;
