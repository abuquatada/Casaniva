import React from "react";
import img1 from "../assests/img1.jpg";

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
    image: img1,
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
    image: img1,
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 text-center p-6">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>

      {/* Horizontal Scrollable Container */}
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-flex space-x-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg text-center w-60 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
