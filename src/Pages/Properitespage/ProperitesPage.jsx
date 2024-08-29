import React, { useState } from 'react';
import Title from '../../components/Title/Title';
import './ProperitesPage.css';
import img1 from './../../assets/images/page-heading-bg.jpg';
import ProperitesButtons from '../../components/ProperitesButtons/ProperitesButtons';
import CardContainer from '../../components/CardContainer/CardContainer';
import ProNumber from '../../components/ProNumber/ProNumber';

function ProperitesPage() {
  const [cardCount, setCardCount] = useState(9);

  const title1 = "HOME / PROPERTIES";
  const pro1 = "PROPERTIES";

  return (
    <div className="properites">
      <Title image={img1} title={title1} pro={pro1} />
      <div className="pro-container">
        <ProperitesButtons setCardCount={setCardCount} />
        <CardContainer cardCount={cardCount} />
      </div>
      <ProNumber/>
    </div>
  );
}

export default ProperitesPage;



