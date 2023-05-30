const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  it("returns an empty array", () => {
    const notes = new NotesModel();
    expect(notes.getNotes()).toEqual([])
  });

  it("returns an array with a single note in it", () => {
    const notes = new NotesModel();
    notes.addNote('Get Milk');
    expect(notes.getNotes()).toEqual(['Get Milk'])
  });

  it("returns an empty array after adding a note and reseting", () => {
    const notes = new NotesModel();
    notes.addNote('Get Milk');
    notes.reset();
    expect(notes.getNotes()).toEqual([])
  });
});