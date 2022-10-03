import { useLiveQuery } from "dexie-react-hooks";
import { useEffect, useState } from "preact/hooks";
import { DB } from "../db";
import { FaTimes } from "react-icons/fa";

interface Props {
  id?: number;
  onClose: () => void;
}

export function NoteEditor({ id, onClose }: Props) {
  const [content, setContent] = useState("");
  const note = useLiveQuery(() => {
    if (id) {
      return DB.notes.where("id").equals(id).first();
    }
  }, [id]);

  useEffect(() => {
    if (note) {
      setContent(note.content);
    }
  }, [note]);

  if (!id || !note) {
    return (
      <div class="p-3 text-center text-sm text-gray-600">
        Please Select a Note to Edit
      </div>
    );
  }

  const handleUpdate = async () => {
    DB.notes.update(id, { content }).then((updated) => {
      if (updated) {
        console.log("updated successfully");
      } else {
        console.error("update failed");
      }
    });
  };

  return (
    <div class="flex flex-1 flex-col gap-2 px-3">
      <header class="flex items-center justify-between h-12">
        <h1 class="text-xl">{note.title}</h1>
        <button
          onClick={onClose}
          class="flex h-6 w-6 items-center justify-center rounded transition hover:bg-gray-200"
          type="button"
        >
          <FaTimes />
        </button>
      </header>

      <textarea
        class="h-full w-full rounded border p-2 text-sm"
        value={content}
        onChange={(e) => setContent(e.currentTarget.value)}
      ></textarea>

      <button
        type="button"
        onClick={handleUpdate}
        class="rounded bg-blue-500 px-2 py-1.5 text-sm font-semibold uppercase text-white hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
}
