import React from "react";
import classes from "./SkillSlider.module.css";
import ProgressBar from "./ProgressBar";

const SkillSlider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.sliderInner}>
        <div className={classes.sliderItem}>
            <ProgressBar />
            <ProgressBar />
        </div>
      </div>
    </div>
  );
};

export default SkillSlider;
