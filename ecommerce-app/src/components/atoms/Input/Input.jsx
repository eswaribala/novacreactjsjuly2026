function Input({ id, name, onChange, required, autoComplete, type, placeholder, value,className="" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      autoComplete={autoComplete}
      className={className}
    />
  );
}
export default Input;