import React, { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevState) => {
        if (prevState === 65) {
          clearInterval(interval);
          return prevState;
        } else {
          return prevState + 1;
        }
      });

      return () => clearInterval(interval);
    }, 47);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.number}>{percentage}%</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="rgba(170, 54, 124, 0.8)" />
            <stop offset="100%" stopColor="rgba(74, 47, 189, 0.8)" />
          </linearGradient>
        </defs>
        <circle cx="79.5" cy="80" r="68" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default ProgressBar;
