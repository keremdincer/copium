import clsx from "clsx";
import { useLiveQuery } from "dexie-react-hooks";
import { FaRegStickyNote } from "react-icons/fa";
import { DB } from "../db";

interface Props {
  onSelect: (id: number) => void;
  selected?: number;
}

export function NoteList({ onSelect, selected }: Props) {
  const notes = useLiveQuery(() => DB.notes.toArray());

  const handleDelete = async (id: number) => {
    try {
      await DB.notes.delete(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {notes?.map((note) => (
        <li
          onClick={() => onSelect(note.id!)}
          class={clsx(
            "flex h-10 cursor-pointer items-center gap-2 border-b px-3 text-sm transition",
            "hover:bg-gray-100",
            selected === note.id && "bg-blue-200 hover:bg-blue-200"
          )}
          key={note.id!}
        >
          <FaRegStickyNote />
          <span class="flex-1">{note.title}</span>
          <button
            class="rounded py-1 px-2 text-sm font-semibold text-red-500 transition hover:bg-red-100 hover:text-red-600"
            onClick={() => handleDelete(note.id!)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
