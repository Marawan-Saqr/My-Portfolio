import { useState, useEffect } from "react";
import "./TopLogo.css";

const TopLogo = () => {

  // Component States
  const [time, setTime] = useState(new Date());
  const [displayedText, setDisplayedText] = useState([]);
  const fullText = "Marawan Saqr";


  // Clock Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  // Animation Effect for Text (One letter at a time)
  useEffect(() => {
    let index = 0;
    const textArray = fullText.split("").map((char, i) => (
      <span key={i} className="animated-letter" style={{ animationDelay: `${i * 0.1}s` }}>
        {char}
      </span>
    ));
    const textInterval = setInterval(() => {
      setDisplayedText((prev) => [...prev, textArray[index]]);
      index++;
      if (index === textArray.length) clearInterval(textInterval);
    }, 100);
    return () => clearInterval(textInterval);
  }, []);


  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="top-logo d-flex justify-content-between align-items-center pt-3">
      <div className="left">
        <h2 className="special-font"><i style={{color: '#6a1414'}} className="fa-solid fa-mug-hot"></i> {displayedText}</h2>
      </div>
      <div className="right">
        <div className="clock-container">
          <h2 className="clock-time mb-0">
            <i className="fa-solid fa-clock"></i> {formatTime(time)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TopLogo;