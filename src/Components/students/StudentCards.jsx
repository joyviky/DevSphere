import React, { useState } from "react";
import { studentsData } from "../../datas/studentData";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = studentsData;

const StudentCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardPerPage = 9;
  const totalCards = studentsData.length;

  const lastIndex = currentPage * 9;
  const firstIndex = lastIndex - cardPerPage;
  const slicedData = studentsData.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(totalCards / cardPerPage);

  // slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
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
  console.log(Slider);
  return (
    <div className="bg-[#0c0c12] text-white py-10">
      <div className="w-fit mx-auto mb-10 px-6 py-3 rounded-2xl border border-cyan-500/20 bg-[#13131d] flex items-center gap-3">
        <p className="text-gray-400 text-sm">Total Students :</p>

        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
          {totalCards}
        </h1>
      </div>

      {/* slick */}

     {/* <Slider {...settings}>
        {
            data.map((card)=>(
                <StudentCard key={card.id} card={card}/>
            ))
        }
     </Slider> */}

      <div className="w-full max-w-7xl  mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-between  gap-5 ">
        {slicedData.map((data) => (
          <StudentCard key={data.id} card={data} />
        ))}
      </div>
      {/* pagination payaluga */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="cardBtn"
        >
          prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className="cardBtn"
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cardBtn"
        >
          next
        </button>
      </div>
    </div>
  );
};
function StudentCard({ card }) {
  return (
    <div className="border  border-border rounded-3xl overflow-hidden flex flex-col items-center justify-center w-full max-w-xs mx-auto hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] transition-all duration-300">
      {/* cover */}
      <div className="w-full h-36">
        <img
          src={card.cover}
          alt={card.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* profile */}
      <div>
        <img
          src={card.image}
          alt={card.name}
          className="w-24 h-24 rounded-full border-4 border-[#141414]  relative -top-12"
        />
      </div>
      {/* details */}
      <div className=" text-center -mt-10">
        <h3 className="text-white text-lg font-semibold my-2">{card.name}</h3>
        <p className="text-gray-400 text-sm my-2">{card.role}</p>
        <p className="text-gray-500 text-xs mt-1 flex my-2 items-center gap-2 justify-center">
          <FaLocationDot />
          {card.college}
        </p>
        {/* skills */}
        <div className="flex flex-wrap justify-center gap-2 my-5 px-4 ">
          {card.skills.map((skill) => (
            <span
              key={skill}
              className="bg-[#1f1f2b] px-3 py-1 text-xs md:text-sm rounded-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        {/* details */}
        <div className="flex items-center justify-center gap-3 my-5">
          <div>
            <h4 className="font-semibold text-lg">{card.projects}</h4>
            <p className="text-xs text-gray-500">Projects</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{card.blogs}</h4>
            <p className="text-xs text-gray-500">blogs</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{card.followers}</h4>
            <p className="text-xs text-gray-500">followers</p>
          </div>
        </div>
        <Link
          to={card.link}
          className="w-[90%]  border mx-auto  block transition border-cyan-500/40 hover:bg-cyan-500  hover:text-black rounded-sm cursor-pointer py-1 my-5"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default StudentCards;
