function Input({ id, name, onChange, required, autoComplete, type, placeholder, ref, value,className="" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      ref={ref}
      required={required}
      autoComplete={autoComplete}
      className={className}
    />
  );
}
export default Input;