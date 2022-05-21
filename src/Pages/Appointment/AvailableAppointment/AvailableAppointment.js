import { format } from 'date-fns';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModals from '../BookingModals/BookingModals';



const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, "PP")
    const { data: services, isLoading, refetch } = useQuery(["available", formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='text-center my-20'>
            <p className="text-xl  text-primary">Available Service on {formattedDate}</p>
            <p className="text-xl ">Please Select A Service</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
                {
                    services.map(service => <AppointmentCard key={service._id} service={service} setTreatment={setTreatment} ></AppointmentCard>)
                }
            </div>
            {
                treatment && <BookingModals date={date} treatment={treatment} refetch={refetch} setTreatment={setTreatment}></BookingModals>
            }
        </div>
    );
};

export default AvailableAppointment;