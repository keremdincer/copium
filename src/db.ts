import Dexie, { Table } from "dexie";

export interface Note {
  id?: number;
  title: string;
  content: string;
  createdAt: number;
}

export class Storage extends Dexie {
  notes!: Table<Note>;

  constructor() {
    super("database");

    this.version(1).stores({
      notes: "++id, title, content",
    });
  }
}

export const DB = new Storage();
