import clsx from "clsx";
import { useLiveQuery } from "dexie-react-hooks";
import { FaRegStickyNote, FaTrashAlt } from "react-icons/fa";
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
    <ul class="p-2 space-y-2">
      {notes?.map((note) => (
        <li
          onClick={() => onSelect(note.id!)}
          class={clsx(
            "flex h-10 cursor-pointer items-center gap-2 border-b px-3 text-base transition",
            "hover:bg-gray-300 text-gray-900 rounded-lg py-2 ",
            selected === note.id && "bg-blue-200 hover:bg-blue-200"
          )}
          key={note.id!}
        >
          <FaRegStickyNote />
          <span class="flex-1 truncate" title={note.title}>{note.title}</span>
          <button
            class="rounded py-1 px-2 text-sm font-semibold text-gray-900 transition hover:text-red-600"
            onClick={() => handleDelete(note.id!)}
          >
            <FaTrashAlt/>
          </button>
        </li>
      ))}
    </ul>
  );
}
