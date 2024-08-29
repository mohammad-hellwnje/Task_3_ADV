import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './ProNumber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProNumber() {
  return (
   <div className="pronumber">
    <div className="num"><span>1</span></div>
    <div className="num active"><span>2</span></div>
    <div className="num"><span>3</span></div>
    <div className="num"><FontAwesomeIcon icon={faChevronRight} fontSize={"12px"}/><FontAwesomeIcon icon={faChevronRight} fontSize={"12px"} /></div>
   </div>
  )
}

export default ProNumber