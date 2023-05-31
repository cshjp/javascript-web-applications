/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe('NotesView', () => {
  it('displays all notes on the page in seperate div', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('Get Milk');
    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toBe(1);
  })
})