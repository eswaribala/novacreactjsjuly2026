function DropDownList({ id, name,options,placeholder, required,className, onChange, onSelect, selectedOption }) {

    return(
        <div className="dropdown">
            <select id={id} name={name} 
            value={selectedOption} 
            onChange={onChange}
            onSelect={onSelect}
            required={required}
            className={className}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (                   

                    <option key={option.value} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>

    )

}

export default DropDownList;