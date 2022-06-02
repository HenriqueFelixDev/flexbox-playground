export function BoxContainer({ className, title, children }) {
    return (
        <div className={`${className} p-4 rounded-sm bg-white max-h-screen shadow-sm`} style={ { height: '80vh' } }>
            { title && (<h2 className="text-2xl font-bold mb-2">{ title }</h2>) }
            { children }
        </div>
    )
}