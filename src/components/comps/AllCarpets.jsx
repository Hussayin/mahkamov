import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import ProductModal from "./ProductModal";
import { Carpets } from "../DataBasee/AllProducts";
import { TelegramContext } from "../context/TelegramContext";

const AllCarpets = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 🔥 FILTER STATES (ALOHIDA)
  const [activeCountry, setActiveCountry] = useState("All");
  const [activeSize, setActiveSize] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const { sendToTelegram } = useContext(TelegramContext);

  // 🔹 BARCHA MAHSULOTLAR
  const allProducts = Object.values(Carpets).flat();

  // 🔹 COUNTRY FILTER
  const filteredByCountry =
    activeCountry === "All"
      ? allProducts
      : allProducts.filter((product) =>
          product.id.startsWith(activeCountry.toLowerCase())
        );

  // 🔹 SIZE FILTER
  const filteredBySize =
    activeSize === "All"
      ? filteredByCountry
      : filteredByCountry.filter(
          (product) => product.typeProduct === activeSize
        );

  // 🔹 PRICE FILTER
  const filteredProducts = filteredBySize.filter((product) => {
    const min = minPrice ? Number(minPrice) : 0;
    const max = maxPrice ? Number(maxPrice) : Infinity;
    return product.price >= min && product.price <= max;
  });

  const handleProductClick = (product) => {
    sendToTelegram(product);
    setSelectedProduct(product);
  };

  return (
    <div>
      <div className="mt-[10px] m-auto w-[95%] mb-[70px]">
        {/* HEADER */}
        <div className="flex justify-center gap-[10px] flex-col items-center mb-[15px]">
          <img
            src="/mmmLogo512.png"
            alt="logo"
            className="rounded-lg object-cover h-[80px] w-[120px]"
          />
          <h1 className="text-[25px] font-cormorant">
            Eron va Turkiya Premium gilamlari
          </h1>
        </div>

        {/* COUNTRY FILTER */}
        <div className="flex gap-[5px] mb-[10px] flex-wrap">
          {["All", "Turkiya", "Eron"].map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 font-mono font-bold py-1 rounded-full text-[15px]
                ${
                  activeCountry === country
                    ? "bg-[white] text-black shadow-md"
                    : "bg-[#0B0F1A] text-white border border-white"
                }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* SIZE FILTER */}
        <div className="flex gap-[5px] overflow-x-auto mt-[15px] mb-[15px]">
          {[
            "All",
            "1.5x1.5",
            "2x2",
            "2x3",
            "2.5x3.5",
            "3x3",
            "3x4",
            "3x5",
            "3x6",
            "4x5",
            "4x6",
            "4x7",
            "4x8",
          ].map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-4 font-mono font-bold py-1 rounded-full text-[15px]
                ${
                  activeSize === size
                    ? "bg-[white] text-black shadow-md"
                    : "bg-[#0B0F1A] text-white border border-white"
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* PRICE FILTER */}
        <div className="flex items-center gap-4 mt-[10px] w-[100%] mb-[13px] m-auto">
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full bg-[#0B0F1A] rounded-[10px] border-[white] border-[2px] font-mono font-bold px-[8px] py-[6px] text-white"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-[#0B0F1A] rounded-[10px] border-[white] border-[2px] px-[8px] py-[6px] font-mono font-bold text-black"
          />
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 gap-[13px]">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#0B0F1A] flex flex-col border-2 border-white rounded-[10px] cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <div className="w-[95%] m-auto mt-[7px]">
                <motion.img
                  src={product.image}
                  alt={product.aboutProduct}
                  className="h-[260px]"
                  initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              <div className="m-[7px] flex justify-between">
                <div className="leading-5">
                  <h3 className="text-[17px] font-mono font-bold">
                    {product.price.toLocaleString("de-DE")}$
                  </h3>
                  <h4 className="line-through text-[12px] font-mono font-bold">
                    {product.demoPrice.toLocaleString("de-DE")}$
                  </h4>
                </div>

                <img
                  src={product.countri}
                  alt="country"
                  className="h-[25px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            closeModal={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AllCarpets;
