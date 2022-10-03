import { useState } from "preact/hooks";
import { AddNoteForm } from "./components/AddNoteForm";
import { NoteEditor } from "./components/NoteEditor";
import { NoteList } from "./components/NoteList";

export function App() {
  const [selected, setSelected] = useState<number | undefined>();

  return (
    <>
      <AddNoteForm />
      <NoteList
        selected={selected}
        onSelect={(id: number) => setSelected(id)}
      />
      <NoteEditor id={selected} onClose={() => setSelected(undefined)} />
    </>
  );
}
