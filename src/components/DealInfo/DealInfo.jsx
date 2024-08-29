import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DealInfo.css';

function DealInfo({ Deal }) {
  const Info = {
    apartment: {
      title: "Extra Info About Apartment",
      content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur nam assumenda facilis dolorum delectus sequi, ipsa dolorem harum voluptates?",
      content2: "When you need free CSS templates you can simply type TemplateMO in any search engine website in addition you can type TemplateMo One Page Layouts etc"
    },
    villa: {
      title: "Extra Info About Villa",
      content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur nam assumenda facilis dolorum delectus sequi, ipsa dolorem harum voluptates?",
      content2: "Swag fanny pack lyft blog twee JOMO ethical copper mug succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    },
    penthouse: {
      title: "Extra Info About Penthouse",
      content1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur nam assumenda facilis dolorum delectus sequi, ipsa dolorem harum voluptates?.",
      content2: "Swag fanny pack lyft blog twee JOMO ethical copper mug succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen."
    }
  };

  const selectedInfo = Info[Deal];

  return (
    <div className="deal-info">
      <h2>{selectedInfo.title}</h2>
      <p>{selectedInfo.content1}</p>
      <p>{selectedInfo.content2}</p>
      <button className='buttons'>
        <div className="btn-icon">
          <FontAwesomeIcon icon={faCalendarDays} color='white' />
        </div>
        Schedule a visit
      </button>
    </div>
  );
}

export default DealInfo;