import PrimeButton from 'primereact/button';
function Button({ children, onClick, type = 'button', disabled = false , className = '', label = ''}) {
  return (
    <PrimeButton type={type} onClick={onClick} disabled={disabled} className={className} label={label}>
      {children}
    </PrimeButton>
  );
}

export default Button;