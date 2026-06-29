import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React from "react";
import "./Hero.css";
import hero1 from "../assets/img/header-1.jpg";
import hero2 from "../assets/img/header-5.jpg";
import hero3 from "../assets/img/header-6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight } from "lucide-react";

function Hero() {
  const slides = [
    {
      image: hero1,
      title: "Growth Partner",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  Non, libero ipsum soluta ab amet aliquid, ut, beatae optio  aut nulla neque exercitationem consequuntur placeat a quosquibusdam sequi nemo? Iusto?",
    },
    {
      image: hero2,
      title: "EXPERT ANALYST",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  Non, libero ipsum soluta ab amet aliquid, ut, beatae optio  aut nulla neque exercitationem consequuntur placeat a quosquibusdam sequi nemo? Iusto?",
    },
    {
      image: hero3,
      title: "ADVISER",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.  Non, libero ipsum soluta ab amet aliquid, ut, beatae optio  aut nulla neque exercitationem consequuntur placeat a quosquibusdam sequi nemo? Iusto?",
    },
  ];
  return (
    <>
      <section className="hero-container">
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          navigation
          Loop={true}
          effect="fade"
          autoplay={{ delay: 3000 }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="hero-slide"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="hero-overlay">
                  <div className="hero-content">
                    <h1>{slide.title}</h1>
                    <p>{slide.desc}</p>
                    <div className="hero-btns">
                      <button className="btn-read">
                        {" "}
                        Read More <ChevronRight size={16} />
                      </button>
                      <button className="btn-contact">
                        {" "}
                        Contact Us
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: url(${hero2}),
              }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>EXPERT ANALYST</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, libero ipsum soluta ab amet aliquid, ut, beatae optio
                    aut nulla neque exercitationem consequuntur placeat a quos
                    quibusdam sequi nemo? Iusto?
                  </p>
                  <div className="hero-btns">
                    <button className="btn-read">
                      {" "}
                      Read More <ChevronRight size={16} />
                    </button>
                    <button className="btn-contact">
                      {" "}
                      Contact Us
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero-slide"
              style={{
                backgroundImage: url(${hero3}),
              }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1>ADVISER</h1>
                  <p></p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Non, libero ipsum soluta ab amet aliquid, ut, beatae optio
                    aut nulla neque exercitationem consequuntur placeat a quos
                    quibusdam sequi nemo? Iusto?
                  </p>
                  <div className="hero-btns">
                    <button className="btn-read">
                      {" "}
                      Read More <ChevronRight size={16} />
                    </button>
                    <button className="btn-contact">
                      {" "}
                      Contact Us
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
