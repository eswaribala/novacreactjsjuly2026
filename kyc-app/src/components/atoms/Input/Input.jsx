
function Input({id, name, type = "text", placeholder = "", value, onChange, minLength, maxLength,required,autoComplete}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      minLength={minLength}
      maxLength={maxLength}
      className="input"
      required={required}
      autoComplete={autoComplete}
    />
  );
}

export default Input;