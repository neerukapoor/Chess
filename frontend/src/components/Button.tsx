export const Button = ({onClick, children}: {onClick: () => void, children: React.ReactNode}) => {
    return <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl py-4 px-8 rounded">
        {children}
    </button>
}