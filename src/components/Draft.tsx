import { useState } from "preact/hooks";
import { AddNoteForm } from "./AddNoteForm";
import { NoteEditor } from "./NoteEditor";
import { NoteList } from "./NoteList";
import { Sidebar } from "./Sidebar";

// 
export function Draft(){
  const [selected, setSelected] = useState<number|undefined>()
    return (
        <div class="flex bg-white">
          <Sidebar/>
          <aside class="w-96" aria-label='Sidebar'>

            
            <div class="overflow-y-auto h-screen bg-gray-100 border-r">
            <h1 class="flex text-gray-500 h-12 items-center text-lg justify-center">All Notes</h1>
              
              
              <AddNoteForm/>
              <NoteList onSelect={(id)=> setSelected(id)}/>
              

    
            </div>
            
    
          </aside>
          
          <NoteEditor id={selected} onClose={()=> setSelected(undefined)}/>
    
    
    
        </div>
      )
}