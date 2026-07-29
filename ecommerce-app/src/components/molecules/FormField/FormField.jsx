import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'


function FormField(props) {
    const { id,name,text, autocomplete, required, type = 'text', value, error, onChange,  className = '', placeholder } = props
    return (
        <div className="form-field">
            <Label htmlFor={name} className={className}>{text}</Label>
            <Input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={className}
                autoComplete={autocomplete}
                required={required}
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    )
}

export default FormField