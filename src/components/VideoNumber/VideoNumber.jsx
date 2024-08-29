import "./VideoNumber.css"
function VideoNumber() {
    const info = [
        {
            number:"34",
            title:"Buildings",
            subtext:"Finished Now"
        },
        {
            number:"12",
            title:"Years",
            subtext:"Experience"
        },
        {
            number:"24",
            title:"Awwards",
            subtext:"Won 2023"
        },
    ]
  return (
    <div className="number">
        {
            info.map((item)=>{
                return (
                    <div className="box">
                        <div className="circle">

                        </div>
                        <div className="infos">
                           <div className="num"> <h2>{item.number}</h2></div>
                           <div className="texts">
                            <h3>{item.title}</h3>
                           <p>{item.subtext}</p>
                           </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default VideoNumber