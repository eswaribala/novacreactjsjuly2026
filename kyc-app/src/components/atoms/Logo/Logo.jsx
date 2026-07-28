import './Logo.css';
import kyclogo from './../../../assets/kyclogo.png';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
    <img src={kyclogo} alt="Logo" />
  </div>
);

export default Logo;
