function TextArea({ id, name, onChange, required, autoComplete, type, placeholder, value,className="" }) {
  return (
    <textarea
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      required={required}
      autoComplete={autoComplete}
      className={className}
      rows="10"
      
    />
  );
}
export default TextArea;