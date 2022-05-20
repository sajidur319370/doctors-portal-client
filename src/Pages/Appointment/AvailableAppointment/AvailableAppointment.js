import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import BookingModals from '../BookingModals/BookingModals';
import ServiceCard from '../ServiceCard/ServiceCard';


const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center my-20'>
            <p className="text-xl  text-primary">Available Service on {format(date, 'PP')}</p>
            <p className="text-xl ">Please Select A Service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment} ></ServiceCard>)
                }
            </div>
            {
                treatment && <BookingModals treatment={treatment}></BookingModals>
            }
        </div>
    );
};

export default AvailableAppointment;