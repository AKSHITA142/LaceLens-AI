import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./HeroSlider.css";

export default function HeroSlider() {
  return (
    <section className="hero">
      <Swiper navigation loop>
        <SwiperSlide>
          <div
            className="hero-slide"
            style={{
              backgroundImage: "url('/images/image1.jpg')"
            }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-content">
              <h1>Signature Styles</h1>
              <p>Playful color palettes & timeless elegance</p>
              <button>Shop Collection</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
