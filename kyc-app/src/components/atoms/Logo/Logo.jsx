import kyclogo from './../../../assets/kyclogo.png';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
    <img src={kyclogo} alt="Logo"  className="w-36 h-36 object-contain"/>
  </div>
);

export default Logo;
