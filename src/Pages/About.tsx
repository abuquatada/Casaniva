import React, { useEffect } from "react";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* OUR PROMISE SECTION */}
      <section className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 mb-4">
          OUR PROMISE
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          We don’t just create skincare, we create experiences that uplift,
          rejuvenate, and empower. Whether it’s a deeply hydrating moisturizer,
          a glow-boosting serum, or a refreshing rice scrub, each product is
          made to bring out your skin’s natural radiance.
        </p>
        <h3 className="text-lg sm:text-xl md:text-2xl text-blue-700 mt-4">
          GLOW NATURALLY, GLOW WITH CASANIVA
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Explore our collection & experience the beauty of pure skincare.
        </p>
      </section>

      {/* WELCOME SECTION */}
      <section className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  text-blue-900 mb-4">
          WELCOME TO CASANIVA <br /> WHERE SKIN MEETS PURITY
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          At CASANIVA, we believe that skincare should be as pure as nature
          itself. That’s why we craft effective skincare using the finest
          natural ingredients to nourish your skin from within.
        </p>
      </section>

      {/* WHY CHOOSE CASANIVA */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl  text-blue-900 text-center mb-6">
          WHY CHOOSE CASANIVA?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          {[
            {
              title: "🌿 100% Organic & Natural",
              text: "Free from harsh chemicals, parabens, and sulfates.",
            },
            {
              title: "🌱 Ingredient-Driven Formula",
              text: "Infused with nature’s best, from soothing botanicals to skin-loving extracts.",
            },
            {
              title: "🌎 Eco-Friendly & Cruelty-Free",
              text: "Because beauty should never come at the cost of nature.",
            },
            {
              title: "✨ Tailored for All Skin Types",
              text: "Gentle yet powerful solutions designed for everyone.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg sm:text-xl  text-blue-800">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GLOW NATURALLY */}
      <section className="text-center mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 mb-4">
          GLOW NATURALLY WITH CASANIVA <br /> PURE, ORGANIC, BEAUTIFUL
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
          Your skin deserves the best. At CASANIVA, we bring you skincare that
          is as pure as nature itself. Infused with organic ingredients, our
          products are crafted to nourish, restore, and enhance your natural
          beauty.
        </p>
      </section>

      {/* FINAL WHY CHOOSE CASANIVA */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 text-center mb-6">
          WHY CASANIVA?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          {[
            {
              title: "🌿 Inspired by Nature",
              text: "Each product is a blend of pure, powerful ingredients designed to work in harmony with your skin.",
            },
            {
              title: "💖 Tailored to Your Skin",
              text: "Gentle yet effective formulas for radiant results.",
            },
            {
              title: "🌍 100% Organic Goodness",
              text: "No harsh chemicals—only nature’s best.",
            },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-lg sm:text-xl  text-blue-800">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HASHTAGS */}
      <section className="text-center mt-10">
        <h2 className="text-lg sm:text-xl md:text-2xl  text-blue-700">
          #CASANIVAGLOW #PURELYNATURAL #SKINCARETHATCARES
        </h2>
      </section>
    </div>
  );
};

export default About;
