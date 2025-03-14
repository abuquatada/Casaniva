import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-12 lg:px-24">
      {/* OUR PROMISE SECTION */}
      <section className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          OUR PROMISE
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          We don’t just create skincare, we create experiences that uplift,
          rejuvenate, and empower. Whether it’s a deeply hydrating moisturizer,
          a glow-boosting serum, or a refreshing rice scrub, each product is
          made to bring out your skin’s natural radiance.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold text-blue-700 mt-4">
          GLOW NATURALLY, GLOW WITH CASANIVA
        </h3>
        <p className="text-gray-600 text-lg">
          Explore our collection & experience the beauty of pure skincare.
        </p>
      </section>

      {/* WELCOME SECTION */}
      <section className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          WELCOME TO CASANIVA <br /> WHERE SKIN MEETS PURITY
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          At CASANIVA, we believe that skincare should be as pure as nature
          itself. That’s why we craft effective skincare using the finest
          natural ingredients to nourish your skin from within.
        </p>
      </section>

      {/* WHY CHOOSE CASANIVA */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
          WHY CHOOSE CASANIVA?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              🌿 100% Organic & Natural
            </h3>
            <p>Free from harsh chemicals, parabens, and sulfates.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              🌱 Ingredient-Driven Formula
            </h3>
            <p>
              Every product is infused with nature’s best, from soothing
              botanicals to skin-loving extracts.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              🌎 Eco-Friendly & Cruelty-Free
            </h3>
            <p>Because beauty should never come at the cost of nature.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              ✨ Tailored for All Skin Types
            </h3>
            <p>Gentle yet powerful solutions designed for everyone.</p>
          </div>
        </div>
      </section>

      {/* GLOW NATURALLY */}
      <section className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          GLOW NATURALLY WITH CASANIVA <br /> PURE, ORGANIC, BEAUTIFUL
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
          Your skin deserves the best. At CASANIVA, we bring you skincare that
          is as pure as nature itself. Infused with organic ingredients, our
          products are crafted to nourish, restore, and enhance your natural
          beauty.
        </p>
      </section>

      {/* FINAL WHY CHOOSE CASANIVA */}
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">
          WHY CASANIVA?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              🌿 Inspired by Nature
            </h3>
            <p>
              Each product is a blend of pure, powerful ingredients designed to
              work in harmony with your skin.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              💖 Tailored to Your Skin
            </h3>
            <p>Gentle yet effective formulas for radiant results.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800">
              🌍 100% Organic Goodness
            </h3>
            <p>No harsh chemicals—only nature’s best.</p>
          </div>
        </div>
      </section>

      {/* HASHTAGS */}
      <section className="text-center mt-10">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
          #CASANIVAGLOW #PURELYNATURAL #SKINCARETHATCARES
        </h2>
      </section>
    </div>
  );
};

export default About;
