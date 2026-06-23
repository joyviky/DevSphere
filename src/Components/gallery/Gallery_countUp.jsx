import React from "react";
import { motion } from 'framer-motion'
import CountUpLib from "react-countup";
const CountUp = CountUpLib.default || CountUpLib;

import {
  FaCalendarAlt,
  FaImages,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    number: 158,
    suffix: "",
    label: "Events",
    icon: <FaCalendarAlt />,
    color: "text-secondary",
  },
  {
    id: 2,
    number: 2400,
    suffix: "+",
    label: "Photos",
    icon: <FaImages />,
    color: "text-secondary",
  },
  {
    id: 3,
    number: 85,
    suffix: "",
    label: "Hackathons",
    icon: <FaLaptopCode />,
    color: "text-secondary",
  },
  {
    id: 4,
    number: 1200,
    suffix: "+",
    label: "Students",
    icon: <FaUserGraduate />,
    color: "text-secondary",
  },
];

const GalleryCountUp = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className="bg-black ">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`
              flex items-center gap-3 sm:gap-4 lg:gap-5
              px-4 sm:px-6 lg:px-8
              py-5 sm:py-6 lg:py-7

              

              ${
                index % 2 === 0
                  ? "border-r lg:border-r"
                  : ""
              }

              ${
                index < 2
                  ? "border-b lg:border-b-0"
                  : ""
              }

              ${
                index >= 2 && index !== stats.length - 1
                  ? "lg:border-r"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div
              className={`
                w-12 h-12
                sm:w-14 sm:h-14
                lg:w-16 lg:h-16

                rounded-xl
                bg-[#0F1222]
                border border-[#1D2340]

                flex items-center justify-center

                text-xl
                sm:text-2xl
                lg:text-3xl

                ${item.color}

                shadow-[0_0_20px_rgba(168,85,247,.15)]
              `}
            >
              {item.icon}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold leading-none">
                <CountUp
                  end={item.number}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </h2>

              <p className="mt-1 text-xs sm:text-sm lg:text-base text-gray-400 font-medium">
                {item.label}
              </p>
            </div>
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default GalleryCountUp;