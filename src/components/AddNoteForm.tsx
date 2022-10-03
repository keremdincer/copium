import { useState } from "preact/hooks";
import { DB } from "../db";
import {FaPlusCircle} from "react-icons/fa"

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
    <form class="p-2" onSubmit={handleSubmit}>
      <div class="flex rounded">
        <input
          class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-5 rounded-l-lg border-r-0 text-sm focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="Note Title"
        />
        <button
          class="rounded-r bg-white p-1 px-2 text-2xl font-semibold uppercase text-green-500 transition border-2 border-l-0 border-gray-300 rounded-r-lg"
          type="submit"
        >
          <FaPlusCircle/>
        </button>
      </div>
    </form>
  );
}
