import banner from './../../../assets/banner.png'

const Banner = () => (
  <div className="Banner" data-testid="Banner">
    <img src={banner} alt="Banner"  className="w-300 h-40 object-fill rounded-2xl"/>
  </div>
);

export default Banner;