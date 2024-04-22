import ServiceM from './Service.jsx';
import { toursData } from './data/service.js';



export const ServicesCollection= () => {
  return (
    <div>
      <div id='service-collection'>
        {toursData.data.map((card, index) => (
          <div key={index} className='service-container'>
            <ServiceM card={card} /> {/* Pass the object as property */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCollection;