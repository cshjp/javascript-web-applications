const NotesClient = require('./notesClient')

require('jest-fetch-mock').enableMocks()

describe('NotesClient', () => {
  it('creates a fetch and presents the data', async () => {
    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify(
      ['notey note']
    ));
    
    // client.loadNotes((data) => {
    //   expect(data.notes).toBe('notey note');
    // });

    const data = await client.loadNotes();

    expect(data[0]).toBe('notey note');
  });
});