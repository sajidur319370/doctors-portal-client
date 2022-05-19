import React from 'react';


const InfoCard = ({ img, cardTitle, cardDescription, bgColor }) => {
    return (

        <div className={`card lg:card-side bg-primary shadow-xl d-flex align-middle ${bgColor} text-white`}>
            <figure className='p-5'><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>



    );
};

export default InfoCard;