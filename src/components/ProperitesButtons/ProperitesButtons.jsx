import React, { useState } from 'react';
import './ProperitesButtons.css';

function PropertiesButtons({ setCardCount }) {
    const [activeButton, setActiveButton] = useState('Show All');

    const ButtonClick = (label, count) => {
        setActiveButton(label);
        setCardCount(count);
    };

    return (
        <div className="pro-buttons">
            <button
                className={activeButton === 'Show All' ? 'active' : ''}
                onClick={() => ButtonClick('Show All', 9)}
            >
                Show All
            </button>
            <button
                className={activeButton === 'Apartment' ? 'active' : ''}
                onClick={() => ButtonClick('Apartment', 7)}
            >
                Apartment
            </button>
            <button
                className={activeButton === 'Villa House' ? 'active' : ''}
                onClick={() => ButtonClick('Villa House', 4)}
            >
                Villa House
            </button>
            <button
                className={activeButton === 'Penthouse' ? 'active' : ''}
                onClick={() => ButtonClick('Penthouse', 6)}
            >
                Penthouse
            </button>
        </div>
    );
}

export default PropertiesButtons;
