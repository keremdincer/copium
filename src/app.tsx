import { useState } from "preact/hooks";
import { AddNoteForm } from "./components/AddNoteForm";
import { Draft } from "./components/Draft";
import { NoteEditor } from "./components/NoteEditor";
import { NoteList } from "./components/NoteList";

export function App() {
  const [selected, setSelected] = useState<number | undefined>();

  return (
    <>
      <Draft/>
    </>
  );
}
