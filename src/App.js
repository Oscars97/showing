import "./styles.css";
import React, { useState, useEffect } from "react";

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <i class="far fa-clock"></i>
        {seconds} seconds.
      </header>
    </div>
  );
};

export default IntervalExample;
