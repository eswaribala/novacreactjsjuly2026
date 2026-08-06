function Input({ id, name, onChange, required, autoComplete, type, placeholder, value, ref,className="" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      ref={ref}
      name={name}
      required={required}
      autoComplete={autoComplete}
      className={className}
    />
  );
}
export default Input;