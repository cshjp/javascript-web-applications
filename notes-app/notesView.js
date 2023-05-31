class NotesView {
  constructor(model) {
    this.model = model
    this.mainContainerEl = document.querySelector('#main-container')
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