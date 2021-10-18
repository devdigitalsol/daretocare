import { useContext } from "react";
import AppContext from "../context/AppContext";
import templateData from "../utils/templateData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Lazy, A11y } from "swiper";
import PreImg from "../assets/images/preload.png";
import "swiper/swiper.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, Lazy, A11y]);
const Template = () => {
  let allTemps = [];
  const { step, setStep, defaultLang, setDefaultTemp } = useContext(AppContext);
  for (let name in templateData) {
    let temp = templateData[name].filter((item) => {
      return item.lang === defaultLang;
    });
    allTemps.push(temp[0]);
  }

  const selectTemp = () => {
    let selectedTemp = document
      .querySelector(".swiper-slide-active")
      .getAttribute("template-name");

    // console.log(selectedTemp);
    setDefaultTemp(selectedTemp);
    setStep(step + 1);
  };
  return (
    <div className="wrapper">
      <div className="template-page">
        <h3>Select your template</h3>
        <div className="slider">
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            preloadImages={false}
            lazy={true}
            watchSlidesVisibility={true}
          >
            {allTemps.length &&
              allTemps.map((item) => {
                return (
                  <SwiperSlide key={item.name} template-name={item.name}>
                    <img
                      data-src={`${item.path}/thumb.png`}
                      className="swiper-lazy"
                      alt={item.name}
                    />
                    <div className="swiper-lazy-preloader">
                      <img src={PreImg} alt="preimg" />
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
          <div className="swiper-button-prev prev">Prev</div>
          <div className="swiper-button-next next">Next</div>
        </div>
        <button className="btn" onClick={selectTemp}>
          Select template
        </button>
      </div>
    </div>
  );
};

export default Template;
