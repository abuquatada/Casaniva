import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner: React.FC = () => {
  const images = [
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw010aacc1/Mist_BOGO_Desk.png",
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw64856ba5/Vday_Banner_1920x715px.jpg",
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw010aacc1/Mist_BOGO_Desk.png",
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw64856ba5/Vday_Banner_1920x715px.jpg",
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw010aacc1/Mist_BOGO_Desk.png",
    "https://www.skinn.in/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Skinn-Library/default/dw64856ba5/Vday_Banner_1920x715px.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto max-h-[725px] md:max-h-[600px] sm:max-h-[500px] xs:max-h-[400px] object-cover mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
