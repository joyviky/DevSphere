import React from "react";
import { motion } from "framer-motion";
import { studentsData } from "../../datas/studentData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const data = studentsData;

const Carousel = () => {
  // slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const SliderComponent =
    typeof Slider === "function"
      ? Slider
      : Slider && Slider.default
        ? Slider.default
        : null;
  console.log("Slider (raw):", Slider);
  console.log("SliderComponent resolved:", SliderComponent);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      className="w-full bg-[#000000] py-20 border-b border-border text-center"
    >
      <div className="">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Featured Student Developers
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-2 text-sm mb-10 px-5">
          Discover talented student developers, explore their projects, skills,
          achievements, and connect with the next generation of innovators
          building the future of technology.
        </p>
        {/* Carousel or fallback list */}
        {SliderComponent ? (
          <SliderComponent {...settings}>
            {data.map((card) => (
              <StudentCard key={card.id} card={card} />
            ))}
          </SliderComponent>
        ) : (
          <div className="w-full max-w-7xl mx-auto flex gap-4 overflow-x-auto py-4">
            {data.map((card) => (
              <div key={`sldr-${card.id}`} className=" w-72 ">
                <StudentCard card={card} />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
function StudentCard({ card }) {
  return (
    <motion.div
      className="w-60 h-80 relative overflow-hidden rounded-4xl border border-white/20 bg-[#111] group cursor-pointer  mx-auto transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.35)]"
    >
      <img
        src={card.image}
        alt={card.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <Link to={card.link} className="arrow">
        <MdArrowOutward className=" " />
      </Link>
      <div className="absolute bottom-0 w-full p-5 transition-all duration-500 translate-y-45 group-hover:translate-y-0">
        <h3 className="text-xl font-bold mt-3 text-white">{card.name}</h3>

        <p className="text-secondary text-xs">{card.role}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {card.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-lg bg-cyan-500/10 text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Carousel;
