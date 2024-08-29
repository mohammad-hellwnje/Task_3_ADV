import './FeaturesInfo.css';
import img1 from './../../assets/images/info-icon-01.png';
import img2 from './../../assets/images/info-icon-02.png';
import img3 from './../../assets/images/info-icon-03.png';
import img4 from './../../assets/images/info-icon-04.png';

function FeaturesInfo() {
    const info = [
        {
            id: 1,
            Image: img1,
            title: "250 m2",
            infos: "Total Flat Space",
            p:" "
        },
        {
            id: 2,
            Image: img2,
            title: "Contract",
            infos: "Contract Ready",
            p:"  "
        },
        {
            id: 3,
            Image: img3,
            title: "Payment",
            infos: "Payment",
            p:"Process"
        },
        {
            id: 4,
            Image: img4,
            title: "Safety",
            infos: "24/7 Under",
            p:"Control"
        }
    ];
    
    return (
        <div className="info">
            {
                info.map((item) => {               
                    return (
                        <div className='info-box' key={item.id}>
                           <div className="images">
                           <img src={item.Image} alt="icon-img"/>
                           <p>{item.p}</p>
                           </div>
                            <div className="info-text">
                            <h3>{item.title}</h3>
                            <p>{item.infos}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default FeaturesInfo;
