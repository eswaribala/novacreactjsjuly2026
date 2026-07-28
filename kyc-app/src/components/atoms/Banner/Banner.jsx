import banner from './../../../assets/banner.png'

const Banner = () => (
  <div className="Banner" data-testid="Banner">
    <img src={banner} alt="Banner"  className="w-400 h-40 object-cover"/>
  </div>
);

export default Banner;