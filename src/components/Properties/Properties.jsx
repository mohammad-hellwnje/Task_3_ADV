import CardContainer from '../CardContainer/CardContainer'
import PropertiesTitle from '../PropertiesTitle/PropertiesTitle'
import './Properties.css'

function Properties() {
  return (
    <div className="properties">
            <PropertiesTitle/>
            <CardContainer cardCount={6}/>
    </div>
  )
}

export default Properties