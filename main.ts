import { Admin, Note, NoteBook, Storage, User } from "./notes-system";

const user = new User(1, "Mohamed", "mohamed@example.com", "secret", "01000000000", 25);
const admin = new Admin(2, "Admin", "admin@example.com", "admin-secret", "01100000000", 30);

const notebook = new NoteBook(1, "Personal Notes");
user.addNotebook(notebook);

const note = new Note(1, "TypeScript", "A strongly typed programming language.", user);
notebook.addNote(note);

user.displayInfo();
admin.displayInfo();
console.log(note.preview(20));
console.log(notebook.getNotes());

const noteStorage = new Storage<Note>([note]);
console.log(noteStorage.getAllItems());
