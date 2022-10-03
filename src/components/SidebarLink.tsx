export function SidebarLink({label}:{label:string}) {
    return (
        <li>
            <a href="#" class="flex items-center h-10 p-2 text-base font-normal text-white rounded-lg hover:bg-white hover:text-gray-900 transition">
                <span class="ml-3">{label}</span>
            </a>
        </li>
    )
}