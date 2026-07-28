import banner from './../../../assets/banner.png'

const Banner = () => (
  <div className="Banner" data-testid="Banner">
    <img src={banner} alt="Banner"  className="w-200 h-40 ml-10 object-cover rounded-2xl"/>
  </div>
);

export default Banner;