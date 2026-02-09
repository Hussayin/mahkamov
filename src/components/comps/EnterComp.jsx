import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  "/sanatHaliLogo.jpg",
  "/milatCarpet.jpg",
  "/elexsusLogo.jpg",
  "/samerkentLogo.jpg",
  "/kartaLogo.jpg",
  "/gilamMakonLogo.jpg",
  "/milatLogo.jpg",
];

const logoss = [
  "/milatLogo.jpg",
  "/kartaLogo.jpg",
  "/milatCarpet.jpg",
  "/elexsusLogo.jpg",
  "/samerkentLogo.jpg",
  "/sanatHaliLogo.jpg",
  "/gilamMakonLogo.jpg",
];

const EnterComp = () => {
  return (
    <div className="bg-[#101625] h-auto mt-[37px] flex items-center">
      {/* ASOSIY CONTAINER */}
      <div className="w-full mb-[40px] flex flex-col gap-[25px]">
        {/* tanishtiruv */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="w-[90%] mx-auto text-center"
        >
          <h1 className="text-[24px] text-[#c08d4f] font-bold leading-6 font-cormorant">
            Gilam savdosi bo'yicha 20 yildan ortiq tajribaga ega tadbirkor.
          </h1>
        </motion.div>

        {/* brend egasi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="text-center"
        >
          <div className="w-[70%] mx-auto border-2 border-[#c08d4f] rounded-[30px]">
            <img src="/maruf.jpg" alt="" className="rounded-[30px]" />
          </div>
          <h1 className="text-[25px] leading-7 text-[#c08d4f] font-cormorant font-bold mt-2">
            Maruf Mahkamov <br /> 12 ta gilam do‘kon asoschisi
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className=" flex justify-center gap-[10px] items-center flex-col "
        >
          <h1 className="text-[24px] text-[#c08d4f] font-bold animate-bounce font-cormorant">
            NAVBAT OLISH UCHUN YOZLING
          </h1>
          <div
            onClick={() => {
              document.getElementById("signup")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className=" bg-[#ffc822] rounded-[22px] "
          >
            <h3 className=" text-black font-bold font-cormorant text-[20px] px-[15px]  py-[8px] ">
              Navbat olish
            </h3>
          </div>
        </motion.div>

        {/* LOGO SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeOut", // Easing funksiyasi
            duration: 1, // Animatsiya davomiyligi
            delay: 0.2,
          }}
          className="w-full overflow-hidden bg-[#0B0F1A] py-[12px]"
        >
          <div className="flex w-max animate-marquee gap-[10px]">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px]"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="h-[70px] object-cover opacity-90 transition"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnterComp;
