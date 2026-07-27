import './Logo.css';
import shoplogo from './../../../assets/shoplogo.png';

const Logo = () => (
  <div className="Logo" data-testid="Logo">
    <img src={shoplogo} alt="Logo" className='w-10'/>
  </div>
);

export default Logo;
