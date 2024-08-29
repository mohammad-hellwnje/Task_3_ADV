import React, { useState } from 'react';
import DealHead from '../DealHead/DealHead';
import DealImage from '../DealImage/DealImage';
import DealInfo from '../DealInfo/DealInfo';
import DealList from '../DealList/DealList';
import './DealSection.css';

function DealSection() {
  const [Deal, SetDeal] = useState("apartment");

  return (
   <div className="DealSection">
     <DealHead setDeal={SetDeal}/>
     <div className="DealContent">
        <DealList Deal={Deal} />
        <DealImage Deal={Deal}/>
        <DealInfo Deal={Deal} />
     </div>
   </div>
  )
}

export default DealSection;