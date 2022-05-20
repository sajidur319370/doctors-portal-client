import React from 'react';
import chair from "../../../assets/images/chair.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentBanner = ({ date, setDate }) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p>You picked {format(date, 'PP')}.</p>;
    }
    return (

        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='shadow-lg rounded-lg'>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}></DayPicker>
                    <div className='text-center'>
                        {
                            footer
                        }
                    </div>
                </div>

            </div>

        </div>

    );
};

export default AppointmentBanner;