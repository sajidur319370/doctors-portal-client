import React from 'react';

const TestimonialCard = ({ item }) => {
    const { name, address, img, review } = item
    return (

        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                {review}
            </div>
            <div className="flex justify-center items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className='p-10'>
                    <h2 className="card-title">{name}</h2>
                    <p>{address}</p>
                </div>
            </div>
        </div>


    );
};

export default TestimonialCard;