export function FlexItem({ index }) {
    return (
        <div className="flex items-center justify-center p-10 mr-2 mb-2 bg-green-500 text-white font-bold">
            { index + 1 }
        </div>
    )
}
