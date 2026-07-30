import { Button } from "primereact/button";  
function PrimeButton({ children, onClick, type = 'button', disabled = false , className = '', label = ''}) {
  return (
    <Button type={type} onClick={onClick} disabled={disabled} className={className} label={label}>
      {children}
    </Button>
  );
}

export default PrimeButton;