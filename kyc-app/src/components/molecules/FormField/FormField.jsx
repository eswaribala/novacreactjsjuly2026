import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

function FormField({
  id,
  name,
  placeholder,
  required,
  autoComplete,
  minLength,
  maxLength,
  label,
  type,
  value,
  onChange,
  error,
  className = "",
}) {
  return (
    <div className="form-field">
      <Label
        htmlFor={id}
        text={label}
        className="mb-2 block font-medium text-gray-900"
      />

      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        minLength={minLength}
        maxLength={maxLength}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
      />

      {error && (
        <span className="mt-1 block text-sm text-red-600">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormField;