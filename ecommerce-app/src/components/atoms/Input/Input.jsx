function Input({ id, name, onChange, required, autoComplete, type, placeholder, value }) {
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
      className="input"
    />
  );
}
export default Input;