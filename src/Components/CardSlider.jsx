import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

export default React.memo(function CardSlider({ data, title }) {
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const handleDirection = (direction) => {
    const distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };

  return (
    <div
      className="flex flex-col gap-4 py-4 relative  overflow-hidden z-10 bg-black"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h1 className="ml-12 text-white text-2xl font-semibold">{title}</h1>
      <div className="relative">
        {/* Left Arrow */}
        <div
          className={`absolute top-0 bottom-0 left-0 z-10 w-5 flex justify-center items-center transition duration-300 ${
            !showControls ? "hidden" : ""
          }`}
        >
          <AiOutlineLeft
            onClick={() => handleDirection("left")}
            className="text-white text-3xl cursor-pointer"
          />
        </div>

        {/* Slider */}
        <div
          ref={listRef}
          className="flex gap-4 ml-12 transition-transform duration-300 ease-in-out w-max overflow-visible"
          style={{ transform: "translateX(0px)" }}
        >
          {data.map((movie, index) => (
            <Card movieData={movie} index={index} key={movie.id} />
          ))}
        </div>

        {/* Right Arrow */}
        <div
          className={`absolute top-0 bottom-0 right-0 z-10 w-12 flex justify-center items-center transition duration-300 ${
            !showControls ? "hidden" : ""
          }`}
        >
          <AiOutlineRight
            onClick={() => handleDirection("right")}
            className="text-white text-3xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
});
