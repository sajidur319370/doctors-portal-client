import React from 'react';
import quote from "../../../assets/icons/quote.svg"
import people1 from "../../../assets/images/people1.png"
import people2 from "../../../assets/images/people2.png"
import people3 from "../../../assets/images/people3.png"
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            _id: 1,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1,
            name: "Wilson Carry",
            address: "New York",
        },
        {
            _id: 2,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2,
            name: "Rumana Jenny",
            address: "New York",
        },
        {
            _id: 3,
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3,
            name: "Jessica Jessy",
            address: "New York",
        },

    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div className='p-10'>
                    <h3 className="text-3xl font-bold text-primary">Testimonial</h3>
                    <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
                </div>
                <div className='w-24 lg:w-32'>
                    <img src={quote} alt="quote.png" />

                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    testimonials.map(item => <TestimonialCard key={item._id} item={item}></TestimonialCard>)
                }

            </div>

        </div>



    );
};

export default Testimonials;