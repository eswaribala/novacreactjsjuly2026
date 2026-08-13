function Button({ children, onClick, type = 'button', disabled,className=""}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;