import React from 'react';
import './DealList.css';

function DealList({ Deal }) {
  const dealData = {
    apartment: [
      { listinfo: "Total Flat Space", listNumber: "185 m2" },
      { listinfo: "Floor number", listNumber: "26th" },
      { listinfo: "Number of rooms", listNumber: "4" },
      { listinfo: "Parking Available", listNumber: "Yes" },
      { listinfo: "Payment Process", listNumber: "Bank" },
    ],
    villa: [
      { listinfo: "Total Flat Space ", listNumber: "30 m2" },
      { listinfo: "Floor number", listNumber: "2" },
      { listinfo: "Number of rooms ", listNumber: "6" },
      { listinfo: "Parking Available", listNumber: "Yes" },
      { listinfo: "Payment Process", listNumber: "Yes" },
    ],
    penthouse: [
      { listinfo: "Total Flat Space ", listNumber: "300 m2" },
      { listinfo: " Floor number", listNumber: "30th" },
      { listinfo: "Number of rooms", listNumber: "5" },
      { listinfo: "Parking Available", listNumber: "Yes" },
      { listinfo: "Payment Process", listNumber: "Cash" },
    ],
  };

  const list = dealData[Deal];

  return (
    <div className="deallist">
      {list.map((item, index) => (
        <div key={index} className="list-content">
          <span>{item.listinfo}</span>
          <p>{item.listNumber}</p>
        </div>
      ))}
    </div>
  );
}

export default DealList;
