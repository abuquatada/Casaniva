import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assests/Images/img1.jpg";
import HairSpray from "../assests/Images/HairSpray.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Skinn Raw Perfume",
    price: "$49.99",
    image: img1,
  },
  {
    id: 2,
    name: "Skinn Celeste Perfume",
    price: "$59.99",
    image: HairSpray,
  },
  {
    id: 3,
    name: "Skinn Amalfi Bleu",
    price: "$54.99",
    image: img1,
  },
  {
    id: 4,
    name: "Skinn Pristine Perfume",
    price: "$64.99",
    image: HairSpray,
  },
  {
    id: 5,
    name: "Skinn Amalfi Bleu",
    price: "$54.99",
    image: img1,
  },
  {
    id: 6,
    name: "Skinn Pristine Perfume",
    price: "$64.99",
    image: HairSpray,
  },
];

const sendWhatsAppMessage = (product: Product) => {
  const phoneNumber = "+918878849690";
  const message = `Hello, I'm interested in buying *${product.name}* priced at ${product.price}. Please provide more details.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
};

const FeatureProducts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet & small desktop
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 text-center p-6">
      <h2 className="text-3xl font-bold mb-6">Trending Products</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[303px] h-[303px] object-cover mx-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => sendWhatsAppMessage(product)}
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
            >
              Buy on WhatsApp
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProducts;
