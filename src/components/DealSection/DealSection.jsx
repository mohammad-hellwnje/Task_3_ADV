import React, { useState } from 'react';
import DealHead from '../DealHead/DealHead';
import DealImage from '../DealImage/DealImage';
import DealInfo from '../DealInfo/DealInfo';
import DealList from '../DealList/DealList';
import './DealSection.css';

function DealSection() {
  const [selectedDeal, setSelectedDeal] = useState("apartment");

  return (
   <div className="DealSection">
     <DealHead setSelectedDeal={setSelectedDeal}/>
     <div className="DealContent">
        <DealList selectedDeal={selectedDeal} />
        <DealImage selectedDeal={selectedDeal}/>
        <DealInfo selectedDeal={selectedDeal} />
     </div>
   </div>
  )
}

export default DealSection;