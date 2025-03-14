import React from "react";

const KnowMore = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-3xl font-bold text-gray-900">
        More About Our Perfumes
      </h1>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Discover our extensive collection of perfumes, meticulously crafted to
        suit every preference and style. Whether you prefer floral, woody, or
        musky notes, we have the perfect fragrance to match your personality.
      </p>
      <p className="mt-3 text-gray-700 leading-relaxed">
        Indulge in a world of captivating scents that leave a lasting
        impression. Our premium perfumes are designed for longevity and
        sophistication, ensuring you smell amazing all day long.
      </p>
      <div className="mt-6">
        <button className="px-5 py-2 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default KnowMore;
