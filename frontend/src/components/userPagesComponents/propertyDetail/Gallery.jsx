import React, { useState, useEffect } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

const Gallery = ({ gallery = [], totalPhotos = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  if (!gallery || gallery.length === 0) return null;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };


  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2 h-[300px] md:h-[500px] rounded-2xl overflow-hidden mt-6 shadow-lg">

        <div className="md:row-span-2 overflow-hidden relative group cursor-pointer" onClick={() => openModal(0)}>
          <img
            src={gallery[0]}
            alt="Property Main"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>


        {gallery.slice(1, 4).map((img, idx) => (
          <div
            key={idx}
            className="hidden md:block overflow-hidden relative group cursor-pointer"
            onClick={() => openModal(idx + 1)}
          >
            <img
              src={img}
              alt={`View ${idx + 2}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}


        {gallery[4] && (
          <div
            className="hidden md:block relative overflow-hidden group cursor-pointer"
            onClick={() => openModal(4)}
          >
            <img
              src={gallery[4]}
              alt="View 5"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white transition-opacity group-hover:bg-black/70">
              <span className="font-bold text-xl uppercase tracking-wider">
                {totalPhotos > 5 ? `+${totalPhotos - 5} More` : "View Gallery"}
              </span>
            </div>
          </div>
        )}
      </div>


      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center select-none animate-in fade-in duration-300">

          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-[110]"
          >
            <XMarkIcon className="w-8 h-8" />
          </button>


          <div className="w-full max-w-7xl px-4 flex items-center justify-between relative group">
            <button
              onClick={prevImage}
              className="absolute left-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all md:-translate-x-12 cursor-pointer z-[110]"
            >
              <ChevronLeftIcon className="w-10 h-10" />
            </button>

            <div className="w-full aspect-[16/10] max-h-[85vh] flex items-center justify-center overflow-hidden rounded-xl shadow-2xl">
              <img
                src={gallery[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain pointer-events-none transition-all duration-300 transform scale-100"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all md:translate-x-12 cursor-pointer z-[110]"
            >
              <ChevronRightIcon className="w-10 h-10" />
            </button>
          </div>


          <div className="mt-8 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium tracking-widest border border-white/20">
            {currentIndex + 1} / {gallery.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
