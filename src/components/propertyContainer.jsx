export function PropertyContainer({ title, description, onPropertyChange, children }) {
    return (
        <div className="pb-4 border-b border-gray-200">
            <div className="my-2">
                <h2 className="font-bold text-lg">{ title }</h2>
                <span className="font-light text-gray-400">{ description }</span>
            </div>
            <div className="flex justify-start flex-wrap" onChange={onPropertyChange}>
                { children }
            </div>
        </div>
    )
}