interface TituloProps {
    children: string
}

export default function Titulo({ children } : TituloProps) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-2xl">
                {children}
            </h1>
            <hr className="border-2 bg-purple-500 border-purple-500" />
        </div>
    )
}