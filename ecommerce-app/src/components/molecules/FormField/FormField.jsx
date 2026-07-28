import Label from '../../atoms/Label/Label'
import Input from '../../atoms/Input/Input'


function FormField(props) {
    const { id,name,text, autocomplete, required, type = 'text', value, onChange, error, className = '', placeholder } = props
    return (
        <div className="form-field">
            <Label htmlFor={name} className={className}>{text}</Label>
            <Input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className={error ? 'input-error' : ''}
                autoComplete={autocomplete}
                required={required}
                placeholder={placeholder}
            />
           
        </div>
    )
}

export default FormField