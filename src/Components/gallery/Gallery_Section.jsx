import React, { useState } from "react";
import { galleryData } from "../../datas/images_data";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const imagesData = galleryData;
function nextImage() {}
const Gallery_Section = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const selectedImg = currentIndex !== null ? imagesData[currentIndex] : null;

  return (
    <div className="outer">
      <div className="res">
        <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {imagesData.map((img, ind) => (
            <div
              key={img.id}
              onClick={() => setCurrentIndex(ind)}
              className="group relative w-full h-full overflow-hidden cursor-pointer transition-all duration-300 rounded-2xl border border-gray-600/90"
            >
              <img
                src={img.image}
                alt=""
                className="group-hover:scale-115 object-cover duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h1 className="absolute bottom-5 left-5 text-secondary  capitalize z-10 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {img.title}
              </h1>
            </div>
          ))}
        </div>
        {currentIndex !== null && (
          <div className="fixed bg-black inset-0 p-5 flex flex-col items-center justify-center">
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-5 right-5 text-white text-3xl border p-5 rounded-full w-10 h-10 grid place-content-center border-gray-600 bg-gray-900/90 z-11 cursor-pointer hover:bg-gray-800 duration-200"
            >
              ×
            </button>
            <img key={selectedImg.id} src={selectedImg.image} alt="" className="rounded-2xl animate-fade w-full md:w-[700px] lg:w-[900px] h-auto " />
            <h1 className="absolute bottom-15 border-2 border-secondary px-10 py-2 rounded-full ">
              {selectedImg.title}
            </h1>
            <h1 className="absolute bottom-5 border border-gray-600 px-5 text-sm font-thin py-1 rounded-full">
              {selectedImg.id} / {imagesData.length}
            </h1>
            <div className="absolute z-1 bottom-0  w-full   flex justify-between  top-1/2 -translate-y-1/2 items-center px-5">
              <button
                onClick={() =>
                  setCurrentIndex((cur) => (cur - 1 + imagesData.length) % imagesData.length)
                }
                className="text-3xl text-white/80 bg-white/10 rounded-full h-10 w-10 text-center cursor-pointer hover:bg-white/30 duration-300 grid place-content-center  "
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((cur) => (cur + 1) % imagesData.length)
                }
                className="text-3xl text-white/80 bg-white/10 rounded-full h-10 w-10 text-center cursor-pointer hover:bg-white/30 duration-300 grid place-content-center"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery_Section;
