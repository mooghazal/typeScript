export class User {
  public readonly Id: number;
  public name: string;
  public email: string;
  public Phone: string;
  private password: string;
  private _age: number;
  public readonly notebooks: NoteBook[];

  public constructor(
    Id: number,
    name: string,
    email: string,
    password: string,
    Phone: string,
    age: number
  ) {
    if (age < 18 || age > 60) {
      throw new RangeError("Age must be between 18 and 60.");
    }

    this.Id = Id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.Phone = Phone;
    this._age = age;
    this.notebooks = [];
  }

  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    if (value < 18 || value > 60) {
      throw new RangeError("Age must be between 18 and 60.");
    }
    this._age = value;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public displayInfo(): void {
    console.log(
      `User ID: ${this.Id}, Name: ${this.name}, Email: ${this.email}, ` +
      `Phone: ${this.Phone}, Age: ${this.age}`
    );
  }

  public addNotebook(notebook: NoteBook): void {
    if (!this.notebooks.includes(notebook)) {
      this.notebooks.push(notebook);
    }
  }

  public removeNotebook(notebook: NoteBook): boolean {
    const index = this.notebooks.indexOf(notebook);
    if (index === -1) {
      return false;
    }
    this.notebooks.splice(index, 1);
    return true;
  }
}

export class Admin extends User {
  public constructor(
    Id: number,
    name: string,
    email: string,
    password: string,
    Phone: string,
    age: number
  ) {
    super(Id, name, email, password, Phone, age);
  }

  public manageNotes(
    action: "add" | "remove",
    notebook: NoteBook,
    note: Note
  ): void {
    if (action === "add") {
      notebook.addNote(note);
    } else {
      notebook.removeNote(note);
    }
  }
}

export class Note {
  public readonly Id: number;
  public tittle: string;
  public content: string;
  public readonly userId: User;

  public constructor(Id: number, tittle: string, content: string, userId: User) {
    this.Id = Id;
    this.tittle = tittle;
    this.content = content;
    this.userId = userId;
  }

  public preview(length: number = 30): string {
    if (length <= 0) {
      return "";
    }
    return this.content.length <= length
      ? this.content
      : `${this.content.slice(0, length)}...`;
  }
}

export class NoteBook {
  public readonly Id: number;
  public name: string;
  private readonly notes: Note[];

  public constructor(Id: number, name: string) {
    this.Id = Id;
    this.name = name;
    this.notes = [];
  }

  public addNote(note: Note): void {
    if (!this.notes.includes(note)) {
      this.notes.push(note);
    }
  }

  public removeNote(note: Note): boolean {
    const index = this.notes.indexOf(note);
    if (index === -1) {
      return false;
    }
    this.notes.splice(index, 1);
    return true;
  }

  public getNotes(): readonly Note[] {
    return this.notes;
  }
}

export class Storage<T> {
  private readonly items: T[];

  public constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
  }

  public addItem(item: T): void {
    this.items.push(item);
  }

  public removeItem(item: T): boolean {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return false;
    }
    this.items.splice(index, 1);
    return true;
  }

  public getAllItems(): readonly T[] {
    return this.items;
  }
}
