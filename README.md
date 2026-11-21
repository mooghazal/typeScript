# Simple Notes Management System

This project implements all TypeScript OOP requirements:

- `User`: base class with validated age (18–60) and access modifiers.
- `Admin`: subclass that manages notes in a notebook.
- `Note`: stores the note author as a `User` reference.
- `NoteBook`: owns notes through composition.
- `User`: owns multiple notebooks through aggregation.
- `Storage<T>`: generic storage for any data type.

## Build and run

```bash
npm run start
```

## UML class diagram

Open [class-diagram.puml](class-diagram.puml) in a UML/PlantUML viewer.

Relationships in the diagram:

1. **Inheritance:** `Admin` extends `User`.
2. **Composition:** `NoteBook` owns `Note` objects.
3. **Aggregation:** `User` owns references to multiple `NoteBook` objects.
4. **Association:** each `Note` is associated with one author (`User`).
