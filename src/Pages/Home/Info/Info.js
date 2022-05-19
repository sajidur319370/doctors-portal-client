import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from "../../../assets/icons/clock.svg"
import marker from "../../../assets/icons/marker.svg"
import phone from "../../../assets/icons/phone.svg"

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-10'>
            <InfoCard img={clock} cardTitle="Opening Hours" bgColor='bg-primary'></InfoCard>
            <InfoCard img={marker} cardTitle="Visit Our Location" bgColor='bg-accent'></InfoCard>
            <InfoCard img={phone} cardTitle="Contuct us Now" bgColor='bg-secondary'></InfoCard>

        </div>
    );
};

export default Info;