import { useState, useEffect, useRef } from "react";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const AutoSlides = ({ slides, arrIndex }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  // console.log(arrIndex);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  });

  return (
    <div style={{ margin: "20%", overflow: "hidden", maxWidth: 500 }}>
      <div
        className={`slideshowSlider slideshowSlider-${arrIndex}`}
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((img, i) => (
          <img
            key={i}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={img}
            alt={i}
          />
        ))}
      </div>

      {/* <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
  );
};
export default AutoSlides;
