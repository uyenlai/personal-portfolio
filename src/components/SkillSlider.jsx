import React, { useState } from "react";
import classes from "./SkillSlider.module.css";
import ProgressBar from "./ProgressBar";

const SkillSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const array = [
    ["HTML", "CSS", "JavaScript"],
    ["React", "Tailwind", "Git"],
  ];
  const goToNextSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === array.length - 1 ? 0 : prevState + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevState) =>
      prevState === 0 ? array.length - 1 : prevState - 1
    );
  };

  return (
    <div className={classes.slider}>
      <div className={classes.sliderItem}>
        {array.map((item, index) => (
          <div
            className={classes.slide}
            key={index}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
          >
            {item.map((subItem, index) => (
              <ProgressBar skill={subItem} key={index} />
            ))}
          </div>
        ))}

        <button
          style={{
            left: "5%",
          }}
          onClick={goToPreviousSlide}
        >
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <button style={{ right: "6%" }} onClick={goToNextSlide}>
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default SkillSlider;
