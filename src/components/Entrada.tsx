import { InputHTMLAttributes } from "react"

interface EntradaProps extends InputHTMLAttributes<HTMLElement> {
    text: string
}

export default function Entrada({ text, type = 'text', ...props }: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2 ">
                {text}
            </label>
            <input
                type={type}
                {...props}
                className={`
                    border border-purple-500 rounded-md focus:outline-none
                    bg-gray-50 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}