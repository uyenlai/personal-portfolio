import React, { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ skill, percentage, isRunning }) => {
  const [progress, setProgress] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(445);

  useEffect(() => {
    if (isRunning) {
      setStrokeDashoffset(452 - (percentage * 452) / 100);
      const intervalIncrease = setInterval(() => {
        setProgress((prevState) => {
          if (prevState === percentage) {
            clearInterval(intervalIncrease);
            return prevState;
          } else {
            return prevState + 1;
          }
        });
      }, 23);
      return () => clearInterval(intervalIncrease);
    } else {
      const intervalDecrease = setInterval(() => {
        setProgress((prevState) => {
          if (prevState === 0) {
            clearInterval(intervalDecrease);
            return prevState;
          } else {
            return prevState - 1;
          }
        });
      }, 23);
      return () => clearInterval(intervalDecrease);
    }
  }, [isRunning]);

  return (
    <div className={classes.container}>
      <div className={classes.outer}>
        <div className={classes.inner}>
          <div className={classes.number}>{progress}%</div>
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
        <circle
          cx="80"
          cy="80"
          r="72"
          strokeLinecap="round"
          style={{
            strokeDashoffset: isRunning ? strokeDashoffset : 445,
          }}
        />
      </svg>
      <p>{skill}</p>
    </div>
  );
};

export default ProgressBar;
