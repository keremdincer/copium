import { useState } from "preact/hooks";
import { DB } from "../db";

enum Status {
  SUCCESS,
  ERROR,
}

export function AddNoteForm() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState<Status | undefined>();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    try {
      const id = await DB.notes.add({
        title,
        content: "",
        createdAt: new Date().getTime(),
      });

      setStatus(Status.SUCCESS);
      setTitle("");
    } catch (error) {
      setStatus(Status.ERROR);
    }
  };

  return (
    <form class="border p-2" onSubmit={handleSubmit}>
      <div class="flex items-center rounded border">
        <input
          class="flex-1 rounded-l p-1 px-2 text-sm outline-none"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="Note Title"
        />
        <button
          class="rounded-r bg-green-600 p-1 px-2 text-sm font-semibold uppercase text-white transition hover:bg-green-700"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
