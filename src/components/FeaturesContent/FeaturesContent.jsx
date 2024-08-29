import React, { useState } from 'react';
import './FeaturesContent.css';

function FeaturesContent() {
  const [isOpenBox2, setIsOpenBox2] = useState(false);
  const [isOpenBox3, setIsOpenBox3] = useState(false);

  return (
    <div className="content">
      <div className="content-box">
        <div className="content-box1">
          <p>Best useful links?</p>
        </div>
        <div className="content-box2">
          <p>
            Get <span>the best villa</span> website template in HTML CSS and Bootstrap for your business.
            TemplateMo provides you the <span>best free CSS templates</span> in the world. Please tell your friends about it.
          </p>
        </div>
        <div className="content-box3">
          <p onClick={() => setIsOpenBox2(!isOpenBox2)} >
            How does this work?
          </p>
          <div className={`accordion-content ${isOpenBox2 ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
        <div className="content-box3">
          <p onClick={() => setIsOpenBox3(!isOpenBox3)} >
            Why is Villa Agency the best?
          </p>
          <div className={`accordion-content ${isOpenBox3 ? 'open' : ''}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesContent;