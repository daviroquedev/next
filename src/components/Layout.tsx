import Titulo from "./Titulo"

interface LayoutProps {
    titulo: string
    children: JSX.Element
}

export default function Layout({ titulo, children } : LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3 rounded-md
            bg-white text-gray-800
        `}>
            <Titulo>{titulo}</Titulo>
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}