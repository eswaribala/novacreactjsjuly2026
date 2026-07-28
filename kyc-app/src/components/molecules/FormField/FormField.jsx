import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';

function FormField(props) {

    const { id,name,placeholder,required,autocomplete,minLength,maxLength,label, htmlFor, type, value, onChange, error,className } = props;

    return (
        <div className="form-field">
            <Label htmlFor={htmlFor} className={className}>{label}</Label>
            <Input
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                autoComplete={autocomplete}
                minLength={minLength}
                maxLength={maxLength}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && <span className="error">{error}</span>}
        </div>
    );

}

export default FormField;