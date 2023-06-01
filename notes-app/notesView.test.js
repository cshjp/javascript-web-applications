/**
 * @jest-environment jsdom
 */

const fs = require('fs')
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')

describe('NotesView', () => {
  // it('displays all notes on the page in seperate div', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const model = new NotesModel();
  //   const view = new NotesView(model);

  //   model.addNote('Get Milk');
  //   view.displayNotes();

  //   expect(document.querySelectorAll('div.note').length).toBe(1);
  // })

  it('displays the notes written in the input box', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const message = document.querySelector('#note-input')
    message.value = 'My new amazing test note'

    const buttonEl = document.querySelector('#show-note-button');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  })

  it('displays multiple notes on the web page that dont repeat', () =>{
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const message = document.querySelector('#note-input')
    message.value = 'My new amazing test note'

    const buttonEl = document.querySelector('#show-note-button');
    buttonEl.click();

    message.value = 'My new amazing test note again'

    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('My new amazing test note again');
  })
})