import React, { useState } from 'react';
import './DealHead.css';

function DealHead({ setDeal }) {
  const [activeButton, setActiveButton] = useState("apartment");

  const ButtonClick = (TypeOfDeal) => {
    setActiveButton(TypeOfDeal);
    setDeal(TypeOfDeal);
  };

  return (
    <div className="dealhead">
        <div className="dealtitle">
            <div className="deal-title"><h2>BEST DEAL</h2></div>
            <p>Find Your Best Deal Right Now!</p>
        </div>
        <div className="dealbutton">
            <button
              className={`btn ${activeButton === "apartment" ? "active" : ""}`}
              onClick={() => ButtonClick("apartment")}
            >
              Apartment
            </button>
            <button
              className={`btn ${activeButton === "villa" ? "active" : ""}`}
              onClick={() => ButtonClick("villa")}
            >
              Villa House
            </button>
            <button
              className={`btn ${activeButton === "penthouse" ? "active" : ""}`}
              onClick={() => ButtonClick("penthouse")}
            >
              Penthouse
            </button>
        </div>
    </div>
  )
}

export default DealHead;

