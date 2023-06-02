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

  it('adds multiple notes into the array from another array', () => {
    const notes = new NotesModel();
    notes.addNote('run to store')
    notes.setNotes(["get milk", "store milk", "drink milk"])
    expect(notes.getNotes()).toEqual(['run to store', "get milk", "store milk", "drink milk"])
  })
});