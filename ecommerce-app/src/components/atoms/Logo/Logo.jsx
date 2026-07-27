import './Logo.css';
import shoplogo from './../../../assets/shoplogo.png';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
    <img src={shoplogo} alt="Logo" />
  </div>
);

export default Logo;
