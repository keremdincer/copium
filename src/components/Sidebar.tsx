import { SidebarLink } from "./SidebarLink"

const links = ["Shortcuts", "All Notes", "Shared with Me", "Tags", "Trash", "Login"]
export function Sidebar() {
    return (
        <aside class="bg-gray-900 w-64">
            <h1 class="uppercase font-semibold flex text-white h-12 items-center justify-center text-lg">Copium</h1>
            <div class="p-2 relative mx-auto text-gray-600">
                <input class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-5 rounded-lg text-sm focus:outline-none" type="search" name='search' placeholder='Search...' />
                

            </div>
            <ul class="space-y-2 p-2">
                {links.map(link=>(
                    <SidebarLink key = {link} label={link}/>
                ))}

            

            </ul></aside>
    )
}
