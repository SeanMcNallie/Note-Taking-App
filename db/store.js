const fs = require('fs');
const path = require('path');
const util = require('util');

//const uuid
const { v4: uuidv4 } = require('uuid');

// readfile async
const readFileAsync = util.promisify(fs.readFile);
// writefile async
const writeFileAsync = util.promisify(fs.writeFile);

// class that is store
class Store {
        readNote(){
            return readFileAsync('db/db.json',"utf8")
        }
        writeNotes(notes){
            return writeFileAsync('db/db.json',JSON.stringify(notes))
        }
        getNotes(){
            return this.readNote().then(notes => {
                let parsedNotes = JSON.parse(notes) || []
                return parsedNotes
            })
        }
        createNewNote(newnote){
            return this.readNote().then(notes => {
               console.log("readNote",JSON.parse(notes))
               const parsedNotes = JSON.parse(notes);
                let newNoteToSave = {
                    title: newnote.title,
                    text: newnote.text,
                    id: uuidv4()
                }
                let newNotesList = [...parsedNotes,newNoteToSave]
                return newNotesList
            }).then(data => {
                return this.writeNotes(data)
            })
        }
        deleteNote(id) {
            this.readNote().then(notes =>   {
                return notes.filter(note => note.id != id)
            })
            .then( notesList => {
               return this.writeNotes(notesList)
            })
        }
}


//Read, write and get notes.  Needs a JSON.stringify

// read in brackets call apon db
// same for write

// get return.read() and a .then(tri-catch) if notes are not there need and empty array


// add note if statement
// remove note in the store class

module.exports = new Store()
