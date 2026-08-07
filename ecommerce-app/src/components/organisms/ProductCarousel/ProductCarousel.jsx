import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import carouselData from "../../../data/imgData.js";

function ProductCarousel() {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-slide">
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
              />

              <div className="carousel-content">
                <h1>{item.title}</h1>

                <p>{item.subtitle}</p>

                <button>{item.buttonText}</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductCarousel;