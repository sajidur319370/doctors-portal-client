import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary uppercase text-white font-bold">{children}</button>
    );
};

export default PrimaryButton;