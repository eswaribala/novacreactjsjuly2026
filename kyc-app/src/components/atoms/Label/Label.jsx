function Label({ text, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={`label ${className}`}>
      {text}
    </label>
  );
}

export default Label;