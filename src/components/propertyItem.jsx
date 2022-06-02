export function PropertyItem({ label, propertyName, value }) {
    return (
        <div className="mr-4">
            <label>
              <input type="radio" className="mr-1" name={propertyName} value={value} />
              <span className="select-none">{ label }</span>
            </label>
        </div>
    )
}