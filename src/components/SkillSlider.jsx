import React, { useState } from "react";
import classes from "./SkillSlider.module.css";
import ProgressBar from "./ProgressBar";

const SkillSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const percentage = [90, 89, 87, 85, 80, 88];
  const array = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"];

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
        {percentage.map((value, index) => (
          <div
            className={classes.slide}
            key={value}
            style={{ transform: `translateX(${currentIndex * -100}%)` }}
          >
            <ProgressBar percentage={value} skill={array[index]} />
          </div>
        ))}

        <button className={classes.leftBtn} onClick={goToPreviousSlide}>
          <i className="bi bi-arrow-left-short"></i>
        </button>
        <button className={classes.rightBtn} onClick={goToNextSlide}>
          <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
  );
};

export default SkillSlider;
