import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModals from '../BookingModals/BookingModals';



const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    // const formattedDate = format(date, "PP")
    // useEffect(() => {
    //     fetch(`http://localhost:5000/avaiable?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [])
    useEffect(() => {
        fetch(`http://localhost:5000/service`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='text-center my-20'>
            <p className="text-xl  text-primary">Available Service on {format(date, 'PP')}</p>
            <p className="text-xl ">Please Select A Service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                {
                    services.map(service => <AppointmentCard key={service._id} service={service} setTreatment={setTreatment} ></AppointmentCard>)
                }
            </div>
            {
                treatment && <BookingModals date={date} treatment={treatment} setTreatment={setTreatment}></BookingModals>
            }
        </div>
    );
};

export default AvailableAppointment;