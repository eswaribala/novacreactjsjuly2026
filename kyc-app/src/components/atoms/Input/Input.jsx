function Input({
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  checked,
  onChange,
  minLength,
  maxLength,
  required = false,
  autoComplete,
  className = "",
}) {
  const isCheckbox = type === "checkbox";

  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={isCheckbox ? undefined : placeholder}
      value={isCheckbox ? undefined : value ?? ""}
      checked={isCheckbox ? checked : undefined}
      onChange={onChange}
      minLength={minLength}
      maxLength={maxLength}
      required={required}
      autoComplete={autoComplete}
      className={className}
    />
  );
}

export default Input;