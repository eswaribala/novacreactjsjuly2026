import kyclogo from './../../../assets/kyclogo.png';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
    <img src={kyclogo} alt="Logo"  className="w-50 h-auto object-cover"/>
  </div>
);

export default Logo;
